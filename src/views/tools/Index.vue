<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading
      class="mb-12 primary--text"
      tag="h1"
      title="Our Tools"
    />

    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          class="text-center"
        >
          <b>
            Upload an image below to convert to a .dxf
          </b>
        </v-col>
        <v-col
          cols="12"
        >
          <vue-dropzone
            id="dropzone"
            ref="myVueDropzone"
            :options="dropzoneOptions"
            @vdropzone-complete="completed"
          />
        </v-col>
        <v-col
          cols="12"
          class="text-center"
        >
          <v-btn v-if="showStatus">
            Converting...
          </v-btn>
          <v-btn v-if="showError">
            There was an error with your upload. Please try again later.
          </v-btn>
          <v-btn
            v-if="showDownloadButton"
            :href="uploadURL"
          >
            Download
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row class="pt-12">
        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            :stats="stats"
            color="#FA6F9E"
            dark
            title="Business Stats"
            width="100%"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            :stats="stats2"
            color="secondary"
            dark
            title="The Fight Against Covid"
            width="100%"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'
  import axios from 'axios'

  export default {
    name: 'ToolsIndex',
    components: {
      vueDropzone: vue2Dropzone,
    },
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Our Tools',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'Trupart Manufacturing offers professional manufacturing services including Laser Cutting, Waterjet cutting and 3D printing',
      }],
      meta2: [{
        vmid: 'keywords',
        name: 'keywords',
        content: 'services, manufacturing, waterjet, laser, laser cutting, 3d print, fabrication, metal working',
      }],
    },
    data: () => ({
      postBody: '',
      attempts: 0,
      showStatus: false,
      showDownloadButton: false,
      showError: false,
      uploadID: '',
      uploadURL: '',
      fileToUpload: '',
      filename: '',
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFiles: 1,
        acceptedFiles: 'image/*,application/pdf,.psd',
        headers: { 'My-Awesome-Header': 'header value' },
      },
      stats: [
        { title: '20,000,000+', subtitle: 'Parts Manufactured' },
        { title: '3', subtitle: 'Generations Family Owned' },
        { title: '47', subtitle: 'Years in Business' },
        { title: '200+', subtitle: 'Years of Experience' },
      ],
      stats2: [
        { title: '2000', subtitle: 'Face Shields Produced' },
        { title: '2000', subtitle: 'Face Shields Donated' },
        { title: '100s', subtitle: 'Hours of time' },
        { title: '7', subtitle: 'Open Source Contributions' },
      ],
    }),
    methods: {
      completed (file) {
        // formData.append('paramName', 'some value or other')
        console.log(file)
        console.log('file uploaded!')
        // const buf = Buffer.from(file.dataURL.replace(/^data:image\/\w+;base64,/, ''), 'base64')
        this.fileToUpload = file.dataURL.split(';base64,')[1]
        this.filename = file.upload.filename
        // console.log(this.filename)
        // console.log(this.fileToUpload)
        // this.postBody = '"name":"' + file.name + '"'
        this.getS3URL()
      },
      getS3URL () {
        console.log('sending URL')
        axios.post('https://api.convertio.co/convert', {
          apikey: '71d64d3f40060d5a8c665c91ed67dd38',
          input: 'base64',
          file: this.fileToUpload,
          filename: this.filename,
          outputformat: 'dxf',
        })
          .then(response => {
            this.uploadID = response.data.data.id
            // console.log(response.data.data.id)
            this.showStatus = true
            setTimeout(() => {
              this.checkUpload()
            }, 3000)
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      checkUpload () {
        axios.get('https://api.convertio.co/convert/' + this.uploadID + '/status')
          .then(response => {
            if (this.attempts >= 4) {
              if (response.data.data.output.url != null) {
                this.uploadURL = response.data.data.output.url
                console.log(response.data.data.output.url)
                this.showStatus = false
                this.showDownloadButton = true
              } else {
                this.attempts++
                setTimeout(() => {
                  this.checkUpload()
                }, 3000)
              }
            } else {
              this.showStatus = false
              this.showError = true
            }
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
    },
  }
</script>
