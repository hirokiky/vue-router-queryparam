# vue-router-queryparam

```javascript
import QueryMixin from 'vue-router-queryparam'


export default {
  mixins: [QueryMixin],
  data () { return {
    query: {
      page: {
        type: Number,
        default: 1
      }
    },
    page: 1
  } }
}
```

Query param `?page` will be synced automatically.
Also router history will be pushed.
