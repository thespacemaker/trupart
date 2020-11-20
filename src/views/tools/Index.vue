<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading
      class="mb-12 primary--text"
      tag="h1"
      title="Engineers Portal"
    />

    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="6"
          class="text-center"
        >
          <v-card
            elevation="2"
            outlined
            tile
            align="center"
            class="text-center"
            to="/tools/convert"
          >
            <h2 class="text-center ma-8">Converters</h2>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="text-center"
        >
          <v-card
            elevation="2"
            outlined
            tile
            align="center"
            class="text-center"
            to="/tools/data"
          >
            <h2 class="text-center ma-8">Engineer Data</h2>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="text-center"
        >
          <v-card
            elevation="2"
            outlined
            tile
            align="center"
            class="text-center"
            target="_null"
            href="http://sketch.trupartmfg.com"
          >
            <h2 class="text-center ma-8">Online CAD</h2>
          </v-card>
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

  export default {
    name: 'ToolsIndex',
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
  }
</script>
