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
                Img = "http://havnen.samrum.dk" + frontPage.GetPropertyValue<IPublishedContent>("billede").Url.ToString(),
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
                var map = location.Children.First(x => x.IsDocumentType("oversigtskort"));


                var locationModel = new TabsContentModel
                {
                    Id = location.Id,
                    Title = location.GetPropertyValue<string>("titel"),
                    HomePage = new TabsHomePageModel
                    {
                        Id = location.Id,
                        BeforeImg = "http://havnen.samrum.dk" + location.GetPropertyValue<IPublishedContent>("foerBillede").Url,
                        NowImg = "http://havnen.samrum.dk" + location.GetPropertyValue<IPublishedContent>("nuBillede").Url,
                        Text = location.GetPropertyValue<string>("beskrivelse"),
                        Latitude = location.GetPropertyValue<string>("breddegrad"),
                        Longtitude = location.GetPropertyValue<string>("laengdegrad")
                    },
                    PastList = memories.Select(x => new PastPresentModel
                    {
                        Id = x.Id,
                        Img = "http://havnen.samrum.dk" + x.GetPropertyValue<IPublishedContent>("billede").Url,
                        Text = x.GetPropertyValue<string>("beskrivelse"),
                        Title = x.GetPropertyValue<string>("titel"),
                        Video = x.GetPropertyValue<string>("videoLink")
                    }).ToList(),
                    PresentList = histories.Select(x => new PastPresentModel
                    {
                        Id = x.Id,
                        Img = "http://havnen.samrum.dk" + x.GetPropertyValue<IPublishedContent>("billede").Url,
                        Text = x.GetPropertyValue<string>("beskrivelse"),
                        Title = x.GetPropertyValue<string>("titel"),
                        Video = x.GetPropertyValue<string>("videoLink")
                    }).ToList(),
                    Map = new MapPageModel
                    {
                        Id = location.Id,   
                        Map = "http://havnen.samrum.dk" + map.GetPropertyValue<IPublishedContent>("kort").Url
                    }
                };

                locationModels.Add(locationModel);
            }
            return locationModels;
        }

    }
}
