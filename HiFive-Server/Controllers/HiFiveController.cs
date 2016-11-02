using System;
using Microsoft.AspNetCore.Mvc;

namespace HiFive.Controllers
{
    [RouteAttribute("/")]
    public class HiFiveController : Controller
    {
        private static HiFive.Bachelor bachelor = HiFive.Bachelor.Instance;

        [HttpGet]
        public string Get()
        {
            if (bachelor.nextHiFive.HasValue)
            {
                while(bachelor.nextHiFive.Value > DateTime.Now){
                    System.Threading.Thread.Sleep(500);
                }
            }

            // reset datetime for next HiFive
            bachelor.nextHiFive = (DateTime?)null;
            return "Hey buddy! Hi 5?!";
        }

        [HttpPost]
        public string Post()
        {
            if (bachelor.nextHiFive.HasValue)
            {
                return "Can't Hi 5 right now, Bro!";
            }
            bachelor.nextHiFive = DateTime.Now.AddSeconds(30);
            return "YEAAAAH WOOOOOH!!!";
        }
    }
}
