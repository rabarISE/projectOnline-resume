var bio = {
    name:"Rabar mahmood",
    role:"front-end Developer",
    contacts:{
        mobile:"07501277805",
        email:"rabar@gmail.com",
        github:"rabarISE",
        twitter:"rabar",
        location:"Sulaymaniyah, Iraq"
    },
    welcomeMessage:"To learn study hard",
    skill:[
        "java","c++","php","mysql"
    ],
    bioPic:"images/fry.jpg"
}


var work = {
    jobs:[

        {

            employer: "Dawa restorant",
            title: "Best worker",
            location: "Dawa Hotel And Restaurant, Sulaymaniyah, Iraq",
            dates: "2017",
            description: " is a business which prepares and serves food and drinks to customers in exchange for money. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services, and some offer only take-out and delivery. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments. "
        },

        {

            employer: "Chavy Mall",
            title: "Best worker",
            location: "Chavy Mall, Malik Mahmud Ring Road, Sulaymaniyah, Iraq",
            dates: "2017",
            description: " A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a fridge and other kitchen facilities, upholstered chairs, a flatscreen television and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities "
        }

        ]
};

var projects = {
    projects :
        [
            {
                title: "Second project",
                dates: "2017",
                description: "image map is a list of coordinates relating to a specific image, created in order to hyperlink areas of the image to different destinations (as opposed to a normal image link, in which the entire area of the image links to a single destination). For example, a map of the world may have each country hyperlinked to further information about that country. The intention of an image map is to provide an easy way of linking various parts of an image without dividing the image into separate image files.",
                images: ["https://fthmb.tqn.com/w5NLHnlxUQNNm7HityjhK8dTjhw=/350x400/filters:no_upscale()/about/marathonmap-56a7b11b3df78cf772986304.jpg",
                "http://www.wespro.ca/wordpress/wp-content/uploads/2017/03/keystone-map-350x400.jpg"]
            }
        ]
};

var education = {
    schools:[
        {
            name: "peramerd",
            city: "Sulaymaniyah, Iraq",
            degree: 90.4,
            dates: "2014",
            url: "peramerd@yahoo",
            majors: ["ise"]
        },

        {
            name: "shiren",
            city: "Halkawt, Sulaymaniyah, Iraq",
            degree: 89.4,
            dates: "2010",
            url: "shiren@yahoo",
            majors: ["learn"]
        }
       ],                             //use 4 objects in online resume project
      onlineCourses:
          [
              {
        title:"learn JS",
        schoool:"udacity",
        dates:"2017",
        url:"http://www.udacity.com"
            }
              ]

};

                              ///display function for objects...

         bio.display=
             (function () {
                var formattedName=HTMLheaderName.replace("%data%","Rabar");
                var formattedRole=HTMLheaderRole.replace("%data%","programer");
                var c=$(".clear-fix").append(formattedName);
                $("#header").append(formattedRole);
                var s=$("#topContacts");
                var change = HTMLmobile.replace("%data%", bio.contacts.mobile);
               var x1= s.append(change)
                $("#header").append(x1);
                var change1 = HTMLemail.replace("%data%", bio.contacts.email);
                var x2=s.append(change1);
                $("#header").append(x2);
                var change2 = HTMLgithub.replace("%data%", bio.contacts.github);
               var x3=s.append(change2);
                $("#header").append(x3);
                var change3 = HTMLtwitter.replace("%data%", bio.contacts.twitter);
                var x4=s.append(change3);
                $("#header").append(x4);
                var change4 = HTMLlocation.replace("%data%", bio.contacts.location);
               var x5= s.append(change4);
                $("#header").append(x5);
                var picture = HTMLbioPic.replace("%data%", bio.bioPic);
                $(".center-content").append(picture);
                var messge=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
                $(".center-content").append(messge);

                 $(".center-content").append(HTMLskillsStart);
                 for(var i=0; i<bio.skill.length ;i++) {
                     if (bio.skill.length > 0) {

                         var formatedSkil = HTMLskills.replace("%data%", bio.skill[i]);
                         $("#skills").append(formatedSkil);
                     }
                 }

            })();




    work.display=
        (function() {

            work.jobs.map(function (ar) {
                $("#workExperience").append(HTMLworkStart);
                var emp = HTMLworkEmployer.replace("%data%", ar.employer);
                var titl = HTMLworkTitle.replace("%data%", ar.title);
                var con = emp.concat(titl);
                $(".work-entry:last").append(con);
                var date = HTMLworkDates.replace("%data%", ar.dates);
                $(".work-entry:last").append(date);
                var discrep = HTMLworkDescription.replace("%data%", ar.description);
                $(".work-entry:last").append(discrep);

            });
        })();


        projects.display=
            (function () {

                 projects.projects.map(function (arr) {
                     $("#projects").append(HTMLprojectStart);
                    var titleforproject = HTMLprojectTitle.replace("%data%",arr.title);
                    $(".project-entry:last").append(titleforproject);

                     var datesforproject = HTMLprojectDates.replace("%data%",arr.dates);
                     $(".project-entry:last").append(datesforproject);

                     var descreptionforproject = HTMLprojectDescription.replace("%data%",arr.description);
                     $(".project-entry:last").append(descreptionforproject);

                     if(arr.images.length > 0){
                     for(aa in arr.images){
                         var imgforproject = HTMLprojectImage.replace("%data%",arr.images[aa]);
                         $(".project-entry:last").append(imgforproject);
                     }

                     }
                 })
            })();

           education.display=
               (function() {
                      $("#education").append(HTMLschoolStart);
                       education.schools.map(function (ar) {

                        var emp = HTMLschoolName.replace("%data%", ar.name);
                        var titl = HTMLschoolLocation.replace("%data%", ar.city);
                        var con = emp.concat(titl);
                        $(".education-entry:last").append(con);
                        var date = HTMLschoolDates.replace("%data%", ar.dates);
                        $(".education-entry:last").append(date);
                        var discrep = HTMLschoolMajor.replace("%data%", ar.majors);
                        $(".education-entry:last").append(discrep);

                    });

                    education.onlineCourses.map(function (arr) {

                        $(".education-entry").append(HTMLonlineClasses);
                        var title = HTMLonlineTitle.replace("%data%", arr.title);
                        $(".education-entry:last").append(title);
                        var date = HTMLonlineDates.replace("%data%", arr.dates);
                        $(".education-entry:last").append(date);
                        var url = HTMLonlineURL.replace("%data%", arr.url);
                        $(".education-entry:last").append(url);

                    });
                })();
       

        function dissplayFoter() {
                var s=$("#footerContacts");
                var change = HTMLmobile.replace("%data%", bio.contacts.mobile);
                s.append(change)
                var change1 = HTMLemail.replace("%data%", bio.contacts.email);
                s.append(change1);
                var change2 = HTMLgithub.replace("%data%", bio.contacts.github);
                s.append(change2);
                var change3 = HTMLtwitter.replace("%data%", bio.contacts.twitter);
                s.append(change3);
                var change4 = HTMLlocation.replace("%data%", bio.contacts.location);
                s.append(change4);
                             }
                dissplayFoter();

                
               function displayMap() {
                   $("#mapDiv").append(googleMap);
               }
              displayMap();
