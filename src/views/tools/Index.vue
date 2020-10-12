<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading
      class="mb-12 primary--text"
      tag="h1"
      title="Our Services"
    />

    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="6"
        >
          <vue-dropzone
            id="dropzone"
            ref="myVueDropzone"
            :options="dropzoneOptions"
            @vdropzone-complete="completed"
          />
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
    name: 'ToolIndex',
    components: {
      vueDropzone: vue2Dropzone,
    },
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Our Services',
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
      s3Body: '',
      s3URL: '',
      fileToUpload: '',
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
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
        const buf = Buffer.from(file.replace(/^data:image\/\w+;base64,/, ''), 'base64')
        this.fileToUpload = { file: buf }
        this.postBody = '"name":"' + file.name + '"'
        this.getS3URL()
      },
      getS3URL () {
        axios.post('http://127.0.0.1:5000/upload_file', {
          body: this.postBody,
        })
          .then(response => {
            this.s3Body = response.data.fields
            this.s3URL = response.data.url
            this.uploadToS3()
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      uploadToS3 () {
        const joinedObject = {
          ...this.s3Body,
          ...this.fileToUpload,
        }
        axios.post(this.s3URL, {
          body: joinedObject,
        })
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
    },
  }
</script>
