using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EsbjergHavn.Models
{
    public class TabsContentModel
    {
        public int Id { get; set; }
        public string Title { get; set; } 
        public TabsHomePageModel HomePage { get; set; }
        public List<PastPresentModel> PresentList { get; set; }
        public List<PastPresentModel> PastList { get; set; }
        public MapPageModel Map { get; set; }
    }
}