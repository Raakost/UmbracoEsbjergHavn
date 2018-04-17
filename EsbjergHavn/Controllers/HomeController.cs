using EsbjergHavn.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.WebApi;

namespace EsbjergHavn.Controllers
{
    public class HomeController : UmbracoApiController
    {
        private UmbracoHelper helper = new UmbracoHelper(UmbracoContext.Current);

        public HomePageModel GetHomePageModel(string lang)
        {
            var root = helper.TypedContentAtRoot().First(x => x.GetCulture().TwoLetterISOLanguageName == lang);
            var frontPage = root.Children.First(x => x.IsDocumentType("forside"));
            var homePageModel = new HomePageModel
            {
                Id = frontPage.Id,
                Img = frontPage.GetPropertyValue<IPublishedContent>("billede").Url.ToString(),        
                Text = frontPage.GetPropertyValue<string>("beskrivelse"),
                Title = frontPage.GetPropertyValue<string>("titel")
            };
            return homePageModel;
        }

        public List<TabsContentModel> GetContent(string lang)
        {
            var root = helper.TypedContentAtRoot().First(x => x.GetCulture().TwoLetterISOLanguageName == lang);
            List<TabsContentModel> locationModels = new List<TabsContentModel>();
            var locationsFolder = root.Children.First(x => x.IsDocumentType("lokationer"));
            var locations = locationsFolder.Children;

            foreach (var location in locations)
            {
                var memories = location.Children.First(x => x.IsDocumentType("erindringer")).Children;

                var histories = location.Children.First(x => x.IsDocumentType("historier")).Children;

                var locationModel = new TabsContentModel
                {
                    Id = location.Id,
                    HomePage = new TabsHomePageModel
                    {
                        Id = location.Id,
                        BeforeImg = location.GetPropertyValue<IPublishedContent>("foerBillede").Url,
                        NowImg = location.GetPropertyValue<IPublishedContent>("nuBillede").Url,
                        Text = location.GetPropertyValue<string>("beskrivelse"),
                        Latitude = location.GetPropertyValue<string>("breddegrad"),
                        Longtitude = location.GetPropertyValue<string>("laengdegrad")
                    },
                    PastList = memories.Select(x => new PastPresentModel
                    {
                        Id = x.Id,
                        Img = x.GetPropertyValue<IPublishedContent>("billede").Url,
                        Text = x.GetPropertyValue<string>("beskrivelse"),
                        Title = x.GetPropertyValue<string>("title"),
                        Video = x.GetPropertyValue<string>("videoLink")
                    }).ToList(),
                    PresentList = histories.Select(x => new PastPresentModel
                    {
                        Id = x.Id,
                        Img = x.GetPropertyValue<IPublishedContent>("billede").Url,
                        Text = x.GetPropertyValue<string>("beskrivelse"),
                        Title = x.GetPropertyValue<string>("title"),
                        Video = x.GetPropertyValue<string>("videoLink")
                    }).ToList()
                };
                locationModels.Add(locationModel);
            }
            return locationModels;
        }

    }
}
