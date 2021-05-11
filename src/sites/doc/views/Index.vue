<template>
  <div>
    <doc-header></doc-header>
    <doc-nav></doc-nav>
    <div class="doc-content">
      <div class="doc-content-document">
        <router-view />
      </div>
      <doc-demo-preview :url="demoUrl"></doc-demo-preview>
    </div>
  </div>
</template>
<script>
import Header from "@/sites/doc/components/Header.vue";
import Nav from "@/sites/doc/components/Nav.vue";
// import Footer from "@/sites/doc/components/Footer.vue";
import DemoPreview from "@/sites/doc/components/DemoPreview.vue";

export default {
  components: {
    [Header.name]: Header,
    [Nav.name]: Nav,
    [DemoPreview.name]: DemoPreview,
  },
  data() {
    return {
      demoUrl: "demo.html",
    };
  },
  watch: {
    "$route.path": {
      handler(val) {
        this.setDemoUrl(val);
      },
      immediate: true,
    },
  },
  methods: {
    setDemoUrl(path) {
      const { origin, pathname } = window.location;
      this.demoUrl = `${origin}${pathname.replace(
        "index.html",
        ""
      )}demo.html#${path}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.doc {
  &-content {
    margin-left: 290px;
    display: flex;
    flex-direction: column;

    &-document {
      min-height: 800px;
    }
  }
}
</style>
