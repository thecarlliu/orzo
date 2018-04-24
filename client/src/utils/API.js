import axios from "axios";

export default {
    // Retrieves General Discussion Thread
    getGeneral: function() {
        return axios.get("/api/forum/general");
    }
};
