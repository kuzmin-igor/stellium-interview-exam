using System.Threading.Tasks;
using InterviewExam.Services;
using Microsoft.AspNetCore.Mvc;

namespace InterviewExam.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ItemController : ControllerBase
    {
        private readonly ICosmosDbService _cosmosDbService;

        public ItemController(ICosmosDbService cosmosDbService)
        {
            _cosmosDbService = cosmosDbService;
        }

        [HttpGet]
        [ActionName("get/{id}")]
        public async Task<ActionResult> Get(string id)
        {
            var result = await _cosmosDbService.GetItemAsync(id);
            return Ok(result);
        }
    }
}
