using Microsoft.AspNetCore.Mvc;

namespace HiFive.Controllers
{
    [RouteAttribute("/")]
    public class HiFiveController : Controller
    {
        [HttpGet]
        public string Get()
        {
            return "Hey buddy! Hi 5?!";
        }

        [HttpPost]
        public string Post()
        {
            return "YEAAAAH WOOOOOH!!!";
        }
    }
}
