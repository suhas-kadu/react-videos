// restrict this key to hosted website afterwards
import axios from "axios";
const KEY = 'AIzaSyCGWh4GgPkdS3r6xeSgGTxPfioFdtY3JJ4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxRequests: 15,
        key: KEY,
        pageInfo: {
            "resultsPerPage": 15
          },
        
    }
});