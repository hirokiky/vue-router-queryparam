export default {
  methods: {
    loadQuery () {
      let res = {}
      for (let [name, d] of Object.entries(this.query)) {
        let v = this.$route.query[name]
        v = d.type(v)
        if (isNaN(v) || !v) {
          res[name] = d.default
        } else if (this[name] != v) {
          res[name] = v
        }
      }
      return res
    },
    load () {
      let d = this.loadQuery()
      for (let [name, value] of Object.entries(d)) {
        this[name] = value
      }
    },
    save () {
      let query = this.loadQuery()
      let updated = false
      for (let name of Object.keys(this.query)) {
        if (query[name] != this[name]) {
          query[name] = this[name]
          updated = true
        }
      }
      if (updated) {
        this.$router.push({ query: query })
      }
    }
  },
  watch: {
    '$route.query': function () {
      this.load()
    }
  },
  mounted () {
    this.load()

    for (let name of Object.keys(this.query)) {
      this.$watch(name, () => {
        this.save()
      })
    }
  }
}
