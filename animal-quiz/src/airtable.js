import axios from "axios";

var airtableAPI = process.env.REACT_APP_DB_URL + "api_key=" + process.env.REACT_APP_API_KEY;

var airtableView = "Grid+view";

var airtableReadAPI = airtableAPI + "&view=" + airtableView + "&maxRecords=100&sortField=_createdTime&sortDirection=desc";

export async function newItem (result) {
  try {
    let res = await axios.post(airtableAPI, {
      "fields": {
        "result": result,
        "count": 1
      }
    })

    console.log(res);
  } catch (err) {
    console.log("ERROR: " + err)
  }

}

export async function getItems() {
  let results = new Map();
  try {
    let response = axios
    .get(airtableReadAPI)
    .then(function(result) {
      console.log("results found")
      result.data.records.forEach(function(element, index) {
        if (results.has(element.fields.result)) {
          console.log("again");
          results.set(
            element.fields.result,
            (results.get(element.fields.result) + 1)
          )
          
        } else {
          results.set(element.fields.result, 1);
        }

        return results;
      });
    })

    if (response) {
      console.log("good")
      return results;
    } else {
      console.log("bad")
      return new Map();
    }
  } catch (err) {
    console.log("error " + err);
    return new Map();
  }
}