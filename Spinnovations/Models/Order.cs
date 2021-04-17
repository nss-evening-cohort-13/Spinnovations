﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Spinnovations.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int Order_Id { get; set; }
        public int Product_Id { get; set; }
        public DateTime Order_Date { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Postal_Code { get; set; }
    }
}
