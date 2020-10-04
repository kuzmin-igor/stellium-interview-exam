using Newtonsoft.Json;

namespace InterviewExam.Models
{
    public class Item
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "content")]
        public string Content { get; set; }
    }
}
