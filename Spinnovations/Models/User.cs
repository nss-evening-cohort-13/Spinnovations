﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Spinnovations.Models
{
    public class User
    {
        public int Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Postal_Code { get; set; }
        public string Display_Name { get; set; }
        public string Image_Url { get; set; }
        public DateTime User_Created_Date { get; set; }
        public string State { get; set; }
        public string Firebase_Uid { get; set; }
        public string Email { get; set; }
        public bool Active { get; set; }
    }
}
