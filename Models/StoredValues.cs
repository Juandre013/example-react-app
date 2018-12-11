
using System.Collections.Generic;

namespace example_react_app.Models
{
    public class StoredValues
    {
        public decimal FromAmount { get; set; }
        public string FromCurrency { get; set; }
        public decimal ToAmount { get; set; }
        public string ToCurrency { get; set; }

        public override string ToString()
        {
            return FromAmount+":"+ FromCurrency + ":" +ToAmount + ":" +ToCurrency;
        }

    }
}
