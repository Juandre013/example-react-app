using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using example_react_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace example_react_app.Controllers
{
    [Route("api/stored-values")]
    public class StoredValuesController : Controller
    {
        private static StoredValues storedValues = new StoredValues
        {
            FromAmount = 25m,
            FromCurrency = "USD",
            ToAmount = 25m * 0.7563m,
            ToCurrency = "GBP",
        };

        [HttpGet("")]
        public StoredValues GetValues()
        {
            return storedValues;
        }

        [HttpPost]
        public bool SetValues([FromBody] StoredValues values)
        {
            storedValues = values;
            return true;
        }
    }
}
