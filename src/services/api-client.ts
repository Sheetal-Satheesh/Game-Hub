import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dcd6bdf6816a478e94016eeb026446a2",
  },
});
