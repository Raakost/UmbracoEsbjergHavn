using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EsbjergHavn.Models
{
    public class TabsHomePageModel
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string BeforeImg { get; set; }
        public string NowImg { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
}