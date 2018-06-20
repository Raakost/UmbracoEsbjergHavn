using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EsbjergHavn.Models
{
    public class PastPresentModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string Img { get; set; }
        public string Video { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
}