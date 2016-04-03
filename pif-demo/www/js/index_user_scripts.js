/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    var compare = "IHeartPIF2016";
    var stored;
    var workshops =  {
        "workshop01": {
            "workshopId": "workshop01",
            "faved": false,
            "wsTitle": "Improvise Like A Married Couple!",
            "instructor": "Craig & Carla Cackowski",
            "location": "The Phoenix Theatre",
            "room" : "Hardes Theatre, Reheasal Room A",
            "date": "April 16",
            "time": "2-4pm",
            "address": "100 E. McDowell Rd, Phoenix, AZ  85004",
            "cost": "$55.00",
            "requirement": "at least 6 mo. improv experience",
            "description": "The same communication skills that make for a good relationship make for a good improvised scene. Real-life married couple Craig and Carla Cackowski (from the duo Orange Tuxedo) share their favorite exercises that foster open communication between scene partners! Learn how to read each other’s minds, express your ideas clearly, and avoid arguments (while still getting what you want).",
            "bio": "Craig teaches improvisation at iO West, Carla teaches at The Second City in Hollywood. If you like comedy, you may have seen Craig wear various mustaches and costume pieces on Comedy Central’s Drunk History. If you like drunken history, you may have seen Carla drink various beers on Instagram. They perform regularly at iO West in Los Angeles and recently traveled to Austin for the Out of Bounds Comedy Festival (2015) and the SF Sketchfest (2016)." 
            },
        "workshop02": {
            "workshopId": "workshop02",
            "faved": false,
            "wsTitle": "Our Thing & My Thing",
            "instructor": "Jason Shotts",
            "location": "The Torch Theatre",
            "room" : "",
            "date": "april 16",
            "time": "2-4pm",
            "address": "4721 N Central Ave, Phoenix, AZ 85012",
            "cost": "$55",
            "requirement": "at least 1 year of experience",
            "description": "Relationship goes deeper than Doctor/Patient or Roommates, so what’s “Our Thing” gonna be? Couple that with “My Thing” and you’ll never ask yourself “What’s next?” in a scene again.",
            "bio": "Jason Shotts has been performing improv for audiences since 2003. Currently in Los Angeles and performing at the iO West Theater, he performs in the two-person improv show Dummy (winner of the iO Chicago’s Del Award for “Best Improv Show” in 2013 and 2014) as well as the Harold team Sean & Alex and The Armando Diaz Experience. He’s been teaching improv for the past 10 years and received the iO Chicago’s Del Award for “Best Teacher” in 2011 and 2013. He’s performed and taught improv in London, Rome, Copenhagen, Chicago, Los Angeles, San Francisco, New York, San Diego, Miami, Austin, Houston, Washington DC, Phoenix, Tucson, Cleveland, Detroit, Minneapolis, St. Louis, Atlanta, Traverse City and Gainesville."
        },
        "workshop03": {
            "workshopId": "workshop03",
            "faved": false,
            "wsTitle": "Teaching Workshop (For Teachers and Coaches)",
            "instructor": "Nick Armstrong",
            "location": "The Phoenix Theatre",
            "room" : "Hardes Theatre, Reheasal Room A",
            "date": "april 16",
            "time": "11am-1pm",
            "address": "100 E. McDowell Rd, Phoenix, AZ  85004",
            "cost": "$35",
            "requirement": "",
            "description": "Nick will go over teaching techniques in the classroom. He will also cover the do’s and don’ts of teaching and how to effectively teach improv. At the end there will be a Q and A session regarding all things improv coaching and teaching. Nick will take his 15-plus years of teaching experience to answer questions you may have regarding how to coach and/or teach including how to deal with team issues, students and many other scenarios that arise when teaching improv. Currently, Nick is a teacher at iO West and The Groundlings.",
            "bio": "Nick is an Actor, Improvisor and Writer living in Los Angeles, CA. On TV Nick has been on the Emmy-Award winning shows The Office and Grey’s Anatomy. He has also made appearances on Jimmy Kimmel Live, New Girl, Hot in Cleveland and Parks and Recreation. Onstage, Nick has trained at The Groundlings and iO West. He is an alum of The Sunday Company at the Groundlings and currently performs at the world-famous iO West in Hollywood, CA on LA’s Critically Acclaimed Harold Team King Ten. Nick currently teaches at The Groundlings and has also taught improv at iO West, Westside Comedy Theatre, NOW Improv and has done workshops all over the world. Nick is also the Camp Director and Founder of Camp Improv Utopia an improv retreat for grown ups. He is also one of the founding members of the National Improv Network. For more information visit: www.nickarmstrong.com or www.improvutopia.com."
        },
        "workshop04": {
            "workshopId": "workshop04",
            "faved": false,
            "wsTitle": "Real Fun",
            "instructor": "Colleen Doyle",
            "location": "The Torch Theatre",
            "room" : "",
            "date": "april 16",
            "time": "11am-1pm",
            "address": "4721 N Central Ave",
            "cost": "$55",
            "requirement": "at least 1 year of experience",
            "description": "This workshop is all about keeping your scenes honest and playing moment­-to­moment to make improv easy and fun again. Connect with your scene partner, get out of your head, and bring more of yourself to the stage by relying on who you are and what you feel. Lots of personal feedback and tough love.",
            "bio": "Colleen Doyle grew up in Cleveland where she wrote greeting cards and was a part of the cast that opened The Second City Cleveland. She has made appearances in the indie features Close Quarters and Open Tables as well as the NYTVF Best Comedy Pilot, Shrink. Colleen taught at iO Chicago for the past five years (Teacher of the Year 2014) and performed with the lovely ladies of Virgin Daiquiri, Babymakers, and in the first sketch revue at the Mission Theater, Trap. In LA, Colleen can be seen every week with Dummy and Wheelhouse at iO West where she continues to teach. For more info, please visit ‘thecolleendoyle.com‘ or follow her at twitter.com/anyanghello."
        }
    };

    var shows = {
        "thursday": "thursday",
        "friday": "friday",
        "saturdayMat": "saturday matinee",
        "saturday": "saturday"
    };

    var thursdayTeams = {
            "team01": {
                "teamId": "team01",
                "teamname": "for a good time call",
                "image": "http://fillmurray.com/g/100/100",
                "hometown": "phoenix, az",
                "website": "http://www.google.com",
                "desc": "For a Good Time Call is a long-form improv team consisting of three funny ladies. Marisol Chavez is a Torch Theater graduate. Sara Palmer is a Torch Theatre graduate and performs in the weekly Torch Theatre show, Skewed News. Stina Sieg is a Torch Theatre graduate. After forging a crazy affinity for each other at The Torch Theatre, this group naturally came together in 2013. These girls found a bond that stretched beyond improvising on stage together. Road trips, adventures in dining and “getting weird” became common themes among this group as they melded their friendship. They have performed at the 2014 Red Rocks Improv Festival the 2015 San Diego Improv Festival, 2015 Phoenix Improv Festival, 2015 Orange County Improv Festival and the 2015 HUGE Festival in Minneapolis. They have the honor of being coached by Stacey Reed-Hanlon, of Mail Order Bride.",
                "showdate": "thursday",               
                "showtime": "7:00pm", 
                "faved": "false"
            },
            "team02": {
                "teamId": "team02",
                "teamname": "dutchman",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix, az",
                "website": "http://purple.com",
                "desc": "Mack Duncan and Liz Hutchman began performing together in the musical troupe The Remainders. They began collaborating as Dutchman in 2010. They have played frequently around Phoenix, AZ and have appeared in the Phoenix Improv Festival.",
                "showdate": "thursday",
                "showtime": "7:20pm", 
                "faved": "false"
            },
            "team03": {
                "teamId": "team03",
                "teamname": "woot",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix",
                "website": "http://purple.com",
                "desc": "WoOT! (Women of Outrageous Tendencies) was created when founding member Mindy Keeling wanted to explore what it would be like to share the stage with an all women troupe. WoOT! has embraced growing and expanding their characters through big physical choices and going down unpredictable paths. They have regularly held workshops for women improvisors, to encourage them to find and explore their own outrageous natures.",
                "showdate": "thursday",
                "showtime": "7:40pm", 
                "faved": "false"
            },
            "team04": {
                "teamId": "team04",
                "teamname": "light rail pirates",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix",
                "website": "http://purple.com",
                "desc": "The Light Rail Pirates (LRP) all formed out of a short form group in 2006 to pursue longform performances. They started their journey with the complex format of The Deconstruction. The work they did early on strengthened them into a force to reckon with. They possess strong skills in character work, relationships and high energy play with a strong understanding of the bigger picture. They do not hold back on stage and today they have a wonderful mix of skills with a sense of focus. Their shows really deliver a series of belly laughs that will leave you smiling. Light Rail Pirates have performed in the Phoenix Improv Festival since 2007, are a founding house team at The Torch Theatre and have also traveled to Albuquerque for the Duke City Improv Festival in 2009 & 2010. We were runners up in the Torch Theatre’s PIMMP Tournament in 2014 & 2015. Cast: Current: Jacque Arend, Stacey Hanlon, Adrienne Sanford, Javier Gilmore & Ben Howard. Extended: Xchel Hernandez Zendejas & Chris Williams",
                "showdate": "thursday",
                "showtime": "8:00pm", 
                "faved": "false"
            },
            "team05": {
                "teamId": "team05",
                "teamname": "the displacers",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix",
                "website": "http://purple.com",
                "desc": "Torch Theatre based troupe The Displacers performs the longform format Harold. They are accompanied by Chad Michael Lawson.",
                "showdate": "thursday",
                "showtime": "8:20pm", 
                "faved": "false"
            },
            "team051": {
                "teamId": "team051",
                "teamname": "intermission",
                "showtime": "8:40pm",
                "fave": "false"
            },
            "team06": {
                "teamId": "team06",
                "teamname": "robot destroyers from planet earth",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix",
                "website": "http://purple.com",
                "desc": "Robot Destroyers From Planet Earth: We are a longform improv power duo bringing comedy to the sad people of our home planet of Earth. We enjoy delivering high stakes status play, fun characters, and dynamic visuals to our shows. We have thrilled and chilled audiences in multiple venues in Arizona and Mexico. We hope to thrill and chill audiences for you sometime in the near yet frightening future!",
                "showdate": "thursday",
                "showtime": "9:10pm", 
                "faved": "false"
            },
            "team07": {
                "teamId": "team07",
                "teamname": "zombie gourmet",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix",
                "website": "http://purple.com",
                "desc": "Zombie Gourmet dishes up a buffet of brainy bits, relying on flexibility, support, energy and feeding off of each other to shape their show. Zombie Gourmet has an evolving, unique style, with their current show featuring a ‘Three Ring Circus’ opening and organic transitions between scenes. Their longform show is high-energy, weird, homey, welcoming and occasionally disturbing.",
                "showdate": "thursday",
                "showtime": "9:30pm", 
                "faved": "false"
            },
            "team08": {
                "teamId": "team08",
                "teamname": "newheart",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix",
                "website": "http://purple.com",
                "desc": "From an audience suggestion, Newheart builds scenes with strong characters and points of view — allowing relationships to drive the discovery of concepts and connections throughout each show. From the absurd and playful, to the real and ridiculous, shows often tackle complex themes such as renewal, loss, hope, stagnation, death and other hilarious tragedies that define the human spirit. Newheart strives to bring love, honesty and passion to the world, one set at a time. Newheart was born in 2011, the lovechild of Torch Theater graduates Clifton Gray, Bryan Gerdes, Lauren Shellenbarger and Rachel Tullio. Newheart was an official selection of the 2014 Red Rocks Improv Festival.",
                "showdate": "thursday",
                "showtime": "9:50pm", 
                "faved": "false"
            },
            "team09": {
                "teamId": "team09",
                "teamname": "jaxn reed",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix",
                "website": "http://purple.com",
                "desc": "Jacque and Stacey started improvising together in 2005 and continue to work together in ensembles such as Mail Order Bride and Light Rail Pirates. In 2009 they formed JaxN Reed to focus on the amazing stage chemistry they developed during that time. They focus on bringing a great variety of interesting characters and grounded relationships. JaxN Reed brings the audience on a trip through a small lens of the world, discovering how relationships & people intertwine and connect",
                "showdate": "thursday",
                "showtime": "10:10pm", 
                "faved": "false"
            },
            "team10": {
                "teamId": "team10",
                "teamname": "spearmint",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix",
                "website": "http://purple.com",
                "desc": "With members from every part of this fresh nation, one audience suggestion brings Spearmint together to create different themes and worlds for the group to explore. Spearmint has been performing together since January 2014 and is a Harold team at the Torch Theatre in Phoenix Arizona. Spearmint has performed in the Del Close Marathon in NYC in 2014 and 2015.",
                "showdate": "thursday",
                "showtime": "10:30pm", 
                "faved": "false"
            }
        }
        var fridayTeams = {
            "team11": {
                "teamId": "team11",
                "teamname": "mail order bride",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix",
                "website": "http://purple.com",
                "desc": "Mail Order Bride was the first all-female improvisation group in Phoenix. Started in October of 2006, the Brides found their voice while creating bonds through friendship and life experiences. Mail Order Bride has constantly challenged their creativity, putting together a calendar every year and creating genre show themes such as the White Trash Pool Party and Soap Opera. The members of Mail Order Bride became great all around performers out of exploration of improv in this group and the style of performance that escapes when they perform together is unique. It’s risk-taking, bold, emotional and all backed by strong commitment and interesting characters. MOB is a long running Phoenix Improv Festival feature and recently performed at the San Diego Improv Festival 2016.",
                "showdate": "friday",
                "showtime": "7:00pm", 
                "faved": "false"
            },
            "team12": {
                "teamId": "team12",
                "teamname": "euro trash",
                "image": "http://placecage/com/g/100/100",
                "hometown": "san francisco, ca",
                "website": "http://purple.com",
                "desc": "One sunny afternoon, while sipping beer after a workshop at the San Francisco Improv Festival, Asli proposed to Andrea: How about an improv duo of non-native English speakers? Euro Trash was born. Asli doesn’t speak or understand Italian other than Want some spaghetti? Andrea hasn’t added Turkish to his repertoire of languages yet. But he knows how to toast. Serefe! At times they may come across as speaking gibberish to one another. But when they are on stage, and as the scene unfolds, a bounty of kinesthetic language comes to life, and Euro Trash takes you on an amazing journey of playful improvisation and mixed cultures. Euro Trash is Asli Ors and Andrea Barello. They perform regularly in San Francisco, and in 2015 they performed at Los Angeles Improv Comedy Festival, San Francisco Improv Festival, and Improv Fest Ireland.",
                "showdate": "friday",
                "showtime": "7:30pm", 
                "faved": "false"
            },
            "team13": {
                "teamId": "team13",
                "teamname": "melissa?!",
                "image": "http://placecage/com/g/100/100",
                "hometown": "los angeles, ca",
                "website": "http://purple.com",
                "desc": "The story of Melissa isn’t a story of women nor improv groups. It is a story for everyone who has felt a part of something magical. Coming from all corners of the world, four women (Christina Lopez, Allison Reese, Marianne Smith and Valerie Vasilas) bonded over their love of improv craziness, fart jokes, sexual innuendo, and chalk art to form the best improv group IN THE WORLD!! Our talents combined produce a show like you have never seen.Come witness the humor and passion that is MELISSA!!",
                "showdate": "friday",
                "showtime": "8:00pm", 
                "faved": "false"
            },
            "team14": {
                "teamId": "team14",
                "teamname": "dummy",
                "image": "http://placecage/com/g/100/100",
                "hometown": "los angeles, ca",
                "website": "http://purple.com",
                "desc": "DUMMY is Colleen Doyle and Jason Shotts doing a two-person improvised show. They started performing together at the iO Theater in Chicago back in 2008. Since then, DUMMY has performed for audiences in London, Rome, Copenhagen, Los Angeles, San Francisco, New York, San Diego, Austin, Houston, Washington DC, Cleveland, Detroit, Minneapolis, St. Louis, Atlanta, Traverse City and Gainesville. (DUMMY proudly won the iO Chicago’s Del Award for “Best Non-Harold Improv Show” in 2013 and 2014.) “For years T.J. Jagodowski and Dave Pasquesi have reigned as Chicago’s must-see two-person improv team. After catching a recent set from Colleen Doyle and Jason Shotts at iO Theater, I think it’s safe to say there’s room on that improv pedestal for yet another pair of performers. ” – Nina Metz, Chicago Tribune",
                "showdate": "friday",
                "showtime": "8:30pm", 
                "faved": "false"
            },
            "team15": {
                "teamId": "team15",
                "teamname": "judd",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix, az",
                "website": "http://purple.com",
                "desc": "Accompanied by Shane Carey on various musical instruments, Judd takes improvised scenes and forms them into improvised songs. The result is an unscripted musical-theatre performance. Judd came together in 2010 when a group of Phoenix improvisers wanted to add music to their shows. The group has performed at several locations in the Valley outside of their home stage at The Torch Theatre, including the National Comedy Theatre in Mesa, Copper Blues, Space55, and on stage at the Herberger Theater in the Phoenix Improv Festival 11 (2012), the Phoenix Improv Festival 13 Arizona Showcase (2014), and the Phoenix Improv Festival 14 Mainstage (2015). The group’s improvisers are all avid singers and/or musicians, while the accompanist is also a skilled improviser himself. This versatility allows the group to create songs that are not only fun to hear, but also make sense within the scene and the show. Cast: Shane Carey, Carrie Benton, Nina Miller, Gretchen Larsen, Layla Amerson, Clifton Gray, Bri de Ruiz",
                "showdate": "friday",
                "showtime": "9:30pm", 
                "faved": "false"
            },
            "team16": {
                "teamId": "team16",
                "teamname": "muchuchu",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix, az / los angeles, ca",
                "website": "http://purple.com",
                "desc": "Jacque Arend and Xchel Hernandez Zendejas have shared the stage for many years building an amazing chemistry and trust. They both attended the IO Chicago Summer Intensive in 2005 and returned to Phoenix performing together immediately, by chance. In 2006 the two of them along with four other members formed The Light Rail Pirates and performed and rehearsed regularly for a solid four years. In 2012 through a substitution in a Cagematch, MuChuChu was born. That summer MuChuChu found its voice as the most difficult two person Harold. Jacque & Xchel use high energy, strong commitment and tons of risk taking to achieve this lofty goal. Their attempts brought great success as they had a nine week winning streak until Xchel moved away to Minnesota. Now almost four years later, with Jacque still in Phoenix and Xchel now in LA, they are going on their fourth mainstage appearance at The Phoenix Improv Festival. In the summer of 2015 they were accepted into the LA Improv Festival 7-Day Marathon and made runner-up in the Festival’s Cagematch competition. In September, they were accepted to the 1st-ever Hollywood Improv Festival. Now they are two star crossed improvisors longing for a day when they can re-unite on stage to bring back the electrical charge that is MuChuChu. They promise a great show or will die trying.",
                "showdate": "friday",
                "showtime": "10:00pm", 
                "faved": "false"
            },
            "team17": {
                "teamId": "team17",
                "teamname": "jetzo",
                "image": "http://placecage/com/g/100/100",
                "hometown": "los angeles, ca",
                "website": "http://purple.com",
                "desc": "Jetzo is unlike anything you’ll find on the improv scene. Equal parts performance art, clown and improv, Juzo and Chad perform in costume as a father and son from a small fishing village. Every show is their debut in America. They break every rule of improv and heavily involve the audience. They are always accompanied by a “musical cousin” — who might be playing anything from a guitar to bongos to a harp. Jetzo plays to standing room houses twice a month as part of Catsby, and are one of the most booked teams on the LA indie scene. They are also a regular fixture at San Diego’s Finest City Improv. “Their refusal to go for the cheap laugh and their empathetic play gives their act resonance and depth.” – Paola Coletto, world-renowned instructor, pedagogical director and founder of The School for Theater Creators. “A show built on a commitment to the simple, that is anything but…” – Miles Stroth, teacher/founder of the Miles Stroth workshop. “Jetzo is festival magic. A show that stands out in a line up of teams that stand out. A true crowd pleaser that brings the smiling child out of even the most sour adults. I can’t wait to get them back on my stage.” – Josh Nicols, Spectacles Improv and OC Improv Festival Director. “I was totally inspired by their anarchic spirit, and the joy they share with the audience. It’s hard to find performers nowadays who have that sort of freshness and are exciting to watch.” – Phil Burgers (aka Dr. Brown), world-renowned clown and winner of Best Show at both the Melbourne and Edinburgh Comedy Festivals. “Jetzo is tenderness and scandal all at once. The duo manages to take the audience on a fascinating journey through, at times uncomfortable images. The skill and presence of the duo are clear, charming and captivating.” – Kristen Schier, Producer of Philly Improv Theater’s Duofest.",
                "showdate": "friday",
                "showtime": "10:30pm", 
                "faved": "false"
            }
        }

        var saturdayMatineeTeams = {
            "team18": {
                "teamId": "team18",
                "teamname": "apollo 12",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix, az",
                "website": "http://purple.com",
                "desc": "A founding troupe of The Torch Theatre, Apollo 12 attempts to play to the top of their game as well as the audiences intelligence. Delving deep into literature, mythology and pop culture, Apollo 12 builds up ideas intellectually and then gleefully rips down those ideas bit by bit with a ruthless sense of playfulness. Apollo 12 has been performing for over ten years in Phoenix, Arizona. Some of our festival highlights include: The Phoenix Improv Festival, Southern Improv Festival, Out of Bounds Improv Festival, Gila Monster Improv Festival, Del Close Marathon, Twin Cities Improv Festival and the Dallas Dallas Comedy Festival. Cast: Bill Binder, Shane Carey, Mack Duncan, Jon Jahrmarkt, Rick Larsen, Arturo Ruiz",
                "showdate": "saturdayMatinee",
                "showtime": "5:00pm", 
                "faved": "false"
            },
            "team19": {
                "teamId": "team19",
                "teamname": "not burnt out just unscrewed",
                "image": "http://placecage/com/g/100/100",
                "hometown": "tucson, az",
                "website": "http://purple.com",
                "desc": "Not Burnt Out Just Unscrewed was created in May 2002 as an outlet for actors, comedians, and performers in the Tucson area.. They to bring together a unique group of people from different backgrounds with different levels of experience to create a well rounded and eclectic performance troupe. Emulating the improv greats – Second City, The Groundlings, Comedy Store Players, etc. – Not Burnt Out Just Unscrewed has grown from an experiment into a phenomenon, and we look forward to providing southern Arizona with many more years of entertainment! NBOJU is proud to be the founding troupe to the first improv theater in Tucson, Unscrewed Theater. Looking forward to continuing to bring all forms of improv to Tucson.",
                "showdate": "saturdayMatinee",
                "showtime": "5:30pm", 
                "faved": "false"
            },
            "team20": {
                "teamId": "team20",
                "teamname": "boxcar",
                "image": "http://placecage/com/g/100/100",
                "hometown": "los angeles, ca / cedar city, ut",
                "website": "http://purple.com",
                "desc": "Boxcar seeks to employ the era of postmodern filmmakers such as Christopher Nolan, Wes Anderson, and Spike Jonze to break mainstream conventions of storytelling, creating a unique and wonderfully quirky journey in improv. Cast: Nick Armstrong & Rev McLean",
                "showdate": "saturdayMatinee",
                "showtime": "6:00pm", 
                "faved": "false"
            }
        }
        var saturdayTeams = {
            "team21": {
                "teamId": "team21",
                "teamname": "galapagos",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix, az",
                "website": "http://purple.com",
                "desc": "Having performed countless forms and styles of shows across North America since 2003, Galapagos’s performances are now liquid metal shaped by the suggestion and the group mind. One of the founding groups of The Torch Theatre in Phoenix, they place full commitment, exploring the absurd as a team, and having a blast above all, especially when it involves hijinks like mixing lofty artistic ideals with shameless pop culture tropes. <strong>Most Recent Festival History Includes:</strong> \nPhoenix Improv Festival 2003-2015 \nUCB-NY’s Del Close Marathon 2005-2015 \nChicago Improv Festival 2006, 2013 \nThe OC Improv Festival 2015 \nOut of Bounds 2008-2011 \nImprovaganza 2009-2013 \nDallas Comedy Festival 2010-2012 \nDuke City Improv Festival 2011 \nDetroit Improv Festival 2012 \nSan Diego Improv Festival 2014-2015. \n\nGalapagos is Bill Binder, Jose Gonzalez, Jon Jahrmarkt, Mark Jordan, and Shane Shannon and they love you.",
                "showdate": "saturday",
                "showtime": "7:00pm", 
                "faved": "false"
            },
            "team22": {
                "teamId": "team22",
                "teamname": "honey",
                "image": "http://placecage/com/g/100/100",
                "hometown": "new york, ny",
                "website": "http://purple.com",
                "desc": "Honey was an official selection of the 2015 Phoenix Improv Festival, 2015 Charm City Festival, 2015 Miami Improv Festival, 2014 Detroit Improv Festival, 2014 Phoenix Improv Festival, 2014 Chicago Improv Festival, Inaugural 2013 District Improv Festival, 2013 Detroit Improv Festival, 2013 Baltimore Improv Festival, 2013 and 2014 Phoenix Improv Festival, 2012 Detroit Improv Festival and the 2012 Fall Back Festival in Rochester, NY. Nick Armstrong of IO West described Honey as the “perfect example of group mind on stage”. We were pretty honored by that one. Thanks Nick. An audience member once said that our show makes the most sense. Thanks to them too. This years cast is Shaun Farrugia and David Adams and will feature special guests.",
                "showdate": "saturdayMatinee",
                "showtime": "7:30pm", 
                "faved": "false"
            },
            "team23": {
                "teamId": "team23",
                "teamname": "robot teammate and the accidental party",
                "image": "http://placecage/com/g/100/100",
                "hometown": "los angeles, ca",
                "website": "http://purple.com",
                "desc": "Robot Teammate & The Accidental Party is an LA-based musical comedy troupe programmed to entertain humans. Activated by audience suggestions, the Robots create completely improvised shows featuring polyphonic music, inventive lyrics, and fantastical narratives faster than you can say 01101011011. Since 2012, the Robots have captivated audiences with their spontaneous musical adventures in venues such as Upright Citizens Brigade, Nerdist, and on the Geek & Sundry Twitch.tv stream. In 2014, the team set a new world record with an 86-week winning streak in the audience-voted “cagematch” competition at iO West. Their original scripted sci-fi musical TIMEHEART premiered to sold out audiences at the Hollywood Fringe 2015, earning multiple nominations including Best Musical and was the top-grossing show of the festival. Currently, the Robots are touring regional comedy festivals, performing for private events, and hosting monthly shows at iO West Theater and LA’s largest craft brewery, Golden Road Brewing. Their customizable shows include virtuosic piano and percussion that accompany Disney-style musicals or a variety of games (à la Whose Line Is It Anyway?), and can range from 15 minutes to 2 hours. “Robot Teammate is always worth watching. Their storytelling is top class, their musical versatility is hugely impressive, and, above all, they are properly funny.” – Ewan Phillips, Producer, Whose Line is it Anyway Cast: Chris Bramante, Bryan Cain, Miles Crosman, Molly Dworsky, Nikki Muller, Kat Primeau, Dave Reynolds, and musical director, Sam Johnides.",
                "showdate": "saturdayMatinee",
                "showtime": "8:00pm", 
                "faved": "false"
            },
            "team24": {
                "teamId": "team24",
                "teamname": "orange tuxedo",
                "image": "http://placecage/com/g/100/100",
                "hometown": "los angeles, ca",
                "website": "http://purple.com",
                "desc": "Orange Tuxedo is a two person improv show from a husband and wife team who, collectively, have been doing improv for seven hundred years. In this show, they aim to create grounded relationships, formed by eccentric characters. Craig teaches improvisation at iO West, Carla teaches at The Second City in Hollywood. If you like comedy, you may have seen Craig wear various mustaches and costume pieces on Comedy Central’s Drunk History. If you like drunken history, you may have seen Carla drink various beers on Instagram. They perform regularly at iO West in Los Angeles and recently traveled to Austin for the Out of Bounds Comedy Festival (2015) and the SF Sketchfest (2016). Cast: Craig Cackowski, Carla Cackowski",
                "showdate": "saturdayMatinee",
                "showtime": "8:30pm", 
                "faved": "false"
            },
            "team25": {
                "teamId": "team25",
                "teamname": "bush league",
                "image": "http://placecage/com/g/100/100",
                "hometown": "los angeles, ca",
                "website": "http://purple.com",
                "desc": "Together since early 2013, Bush League is the longest running house Harold team at iO West in Los Angeles.  The team is made up of players who have studied at all the major theatres in Los Angeles and Chicago. On the iO main stage, Bush League performs the classic Harold format.  We emphasize slow play, grounded scenes, relationships and emotional honesty. When performing outside of iO, Bush League often performs mono-scenes, taking our inspiration from the legendary iO group Quartet. We love each other a lot. \r\n Cast: Karen Baughn, Ken Breese, James Bulliard, Debbie Fry, Matthew Gardner, Kristen Henley, Sunny Peabody, Hannah Shaprio, Adam Wasser",
                "showdate": "saturdayMatinee",
                "showtime": "9:30pm", 
                "faved": "false"
            },
            "team26": {
                "teamId": "team26",
                "teamname": "salmon shane",
                "image": "http://placecage/com/g/100/100",
                "hometown": "phoenix, az",
                "website": "http://purple.com",
                "desc": "We begin with several short high energy character scenes with high stakes to build a foundation to our show. We then use those scenes to create a show that explores ridiculous situations through strong emotional character point of view. Salmon Shane has been in the Arizona Showcase of the Festival in previous years making their first mainstage appearance in 2015. They also appeared in the Improvaganza Festival in Honolulu Hawaii in both 2014 & 2015.",
                "showdate": "saturdayMatinee",
                "showtime": "10:00pm", 
                "faved": "false"
            },
            "team27": {
                "teamId": "team27",
                "teamname": "adrift",
                "image": "http://placecage/com/g/100/100",
                "hometown": "philadelphia, pa / various",
                "website": "http://purple.com",
                "desc": "Disaster has struck at sea! A small handful of survivors have made it onto a life raft and find themselves adrift with no land in sight. Taking place over the course of several days at sea, the audience first inspires and then watches as the survivors face what fate holds for them. Featuring a rotating cast of improv guests from around North America, this nationally-touring comedy roadshow has been seen in over a dozen festivals in cities like Philadelphia, New York, Boston, Baltimore and Chicago.",
                "showdate": "saturdayMatinee",
                "showtime": "10:30pm", 
                "faved": "false"
            }
        };


    var myEvents = [];;

    $(document).ready(function(){
        var savedEvents = window.localStorage.getItem("myEvents");
        var myWorkshops = {};
        var logStatus = window.localStorage.getItem("stored");

        if (logStatus === compare) {
            $('#backstage-button').addClass('logged-in');
        } else {
            $('#backstage-button').removeClass('logged-in');
        }

        var workshopTemplate = Handlebars.compile($('#workshopTemplate').html());
        $('#workshop-list').html(workshopTemplate(workshops));

        if (savedEvents) {
            myEvents = savedEvents.split(',');

            for (var i in myEvents) {
                if (workshops[myEvents[i]]) {
                    workshops[myEvents[i]].faved = true;
                }
            }

            for (var key in workshops) {
                if (workshops[key].faved == true) {
                    $('#' + key).find("span.fave").addClass("deselected");
                    $('#' + key).find("span.unfave").removeClass("deselected");
                }
            }
        }


    });

    // fave button
    $(document).on("click", ".fave", function(evt)
    {
        var savedEvents = window.localStorage.getItem("myEvents");
        if (savedEvents) {
            myEvents = savedEvents.split(',');
        }

        var favoritedItem = ($(evt.currentTarget).parent().attr("id"));
        $(evt.currentTarget).addClass("deselected");
        $(evt.currentTarget).next().removeClass("deselected");

        myEvents.push(favoritedItem);

        if (thursdayTeams[favoritedItem]) {
            thursdayTeams[favoritedItem].faved = true;
        } else if (fridayTeams[favoritedItem]) {
            fridayTeams[favoritedItem].faved = true;
        } else if (saturdayMatineeTeams[favoritedItem]) {
            saturdayMatineeTeams[favoritedItem].faved = true;
        } else if (saturdayTeams[favoritedItem]) {
            saturdayTeams[favoritedItem].faved = true;
        } else if (workshops[favoritedItem]) {
            workshops[favoritedItem].faved = true;
        }

        myEvents = myEvents.filter(function(elem,pos){
            if (elem != ""){
                return myEvents.indexOf(elem) == pos;
            }
        }).sort();

        window.localStorage.setItem("myEvents", myEvents);
    });

    $(document).on("click", ".unfave", function(evt)
    {
        var unfavoritedItem = ($(evt.currentTarget).parent().attr("id"));
        var savedEvents = window.localStorage.getItem("myEvents");

        if (savedEvents) {
            myEvents = savedEvents.split(',');
        }

        $(evt.currentTarget).addClass("deselected");
        $(evt.currentTarget).prev().removeClass("deselected");

        var i = 0;
        for (i in myEvents) {
            var showItem = myEvents[i];
            if (showItem == unfavoritedItem){
                myEvents.splice(i,1);
            }
        }

        if (thursdayTeams[unfavoritedItem]) {
            thursdayTeams[unfavoritedItem].faved = false;
        } else if (fridayTeams[unfavoritedItem]) {
            fridayTeams[unfavoritedItem].faved = false;
        } else if (saturdayMatineeTeams[unfavoritedItem]) {
            saturdayMatineeTeams[unfavoritedItem].faved = false;
        } else if (saturdayTeams[unfavoritedItem]) {
            saturdayTeams[unfavoritedItem].faved = false;
        } else if (workshops[unfavoritedItem]) {
            workshops[unfavoritedItem].faved = false;
        }
        
        myEvents = myEvents.filter(function(elem,pos){
            if (elem != "") {
                return myEvents.indexOf(elem) == pos;
            }   
        }).sort(); 
        
        window.localStorage.setItem("myEvents", myEvents);
    });

    
     /* button  #about */
    $(document).on("click", ".about-button", function(evt)
    {

        $(".tab-item").removeClass("active");
        $(".about-button").addClass("active");

        activate_subpage("#about-page");
    });
    
    /* button  Schedule */
    $(document).on("click", ".schedule-button", function(evt)
    {
        $(".tab-item").removeClass("active");
        $(".schedule-button").addClass("active");

        var workshopTemplate = Handlebars.compile($('#workshopTemplate').html());
        $('#workshop-list').html(workshopTemplate(workshops));

        var savedEvents = window.localStorage.getItem("myEvents"); 

        if (savedEvents) {
            myEvents = savedEvents.split(',');
        }

        for (var i in myEvents) {
                
            if (workshops[myEvents[i]]) {
                workshops[myEvents[i]].faved = true;
            } 
        }

        for (var key in workshops) {
            if (workshops[key].faved == true) {
                $('#' + key).find("span.fave").addClass("deselected");
                $('#' + key).find("span.unfave").removeClass("deselected");
            }
        }

        activate_subpage("#schedule-page");
    });
    
        /* button  #twitter */
    $(document).on("click", ".twitter-button", function(evt)
    {
         /*global activate_subpage */
        $(".tab-item").removeClass("active");
        $(".twitter-button").addClass("active");

         activate_subpage("#twitter-page"); 
    });
        
        /* button  my-schedule */
    $(document).on("click", ".my-schedule-button", function(evt)
    {
        $(".tab-item").removeClass("active");
        $(".my-schedule-button").addClass("active");

        var myThursday = {};
        var myFriday = {};
        var mySaturdayMatinee = {};
        var mySaturday = {};
        var myWorkshops = {};
        var myOtherEvents = {};

        var storedEvents = (window.localStorage.getItem("myEvents"));
        
        if (storedEvents) {
            var storedEventsArray = storedEvents.split(',');
        
            for (var i in storedEventsArray) {
                if (thursdayTeams[storedEventsArray[i]]){
                    thursdayTeams[storedEventsArray[i]].faved = true;
                } else if (fridayTeams[storedEventsArray[i]]) {
                    fridayTeams[storedEventsArray[i]].faved = true;
                } else if (saturdayMatineeTeams[storedEventsArray[i]]) {
                    saturdayMatineeTeams[storedEventsArray[i]].faved = true;
                } else if (saturdayTeams[storedEventsArray[i]]) {
                    saturdayTeams[storedEventsArray[i]].faved = true;
                } else if (workshops[storedEventsArray[i]]) {
                    workshops[storedEventsArray[i]].faved = true;
                }
            }
        }

        for (var key in thursdayTeams) {
            if (thursdayTeams.hasOwnProperty(key)) {
                var val = thursdayTeams[key];
                if (val.faved == true && myThursday[key] == null) {
                    myThursday[key] = val;
                }
            }
        }

        for (var key in fridayTeams) {
            if (fridayTeams.hasOwnProperty(key)) {
                var val = fridayTeams[key];
                if (val.faved == true) {
                    myFriday[key] = val;
                }
            }
        }

        for (var key in saturdayMatineeTeams) {
            if (saturdayMatineeTeams.hasOwnProperty(key)) {
                var val = saturdayMatineeTeams[key];
                if (val.faved == true) {
                    mySaturdayMatinee[key] = val;
                }
            }
        }

        for (var key in saturdayTeams) {
            if (saturdayTeams.hasOwnProperty(key)) {
                var val = saturdayTeams[key];
                if (val.faved == true) {
                    mySaturday[key] = val;
                }
            }
        }

        for (var key in workshops) {
            if (workshops.hasOwnProperty(key)) {
                var val = workshops[key];
                if (val.faved == true) {
                    myWorkshops[key] = val;
                }
            }
        }

        if (jQuery.isEmptyObject(myThursday)) {
            $('#my-thursday-team-list').html("you haven't favorited anything for thursday yet");
        } else {
            var myThursdayTemplate = Handlebars.compile($('#myThursdayTemplate').html());
            $('#my-thursday-team-list').html(myThursdayTemplate(myThursday));
        }
            
        if (jQuery.isEmptyObject(myFriday)) {
            $('#my-friday-team-list').html("you haven't favorited anything for friday yet")
        } else {
            var myFridayTemplate = Handlebars.compile($('#myFridayTemplate').html());
            $('#my-friday-team-list').html(myFridayTemplate(myFriday)); 
        }
            
        if (!jQuery.isEmptyObject(mySaturdayMatinee)) {
            $('#no-saturday-faves').html("");
            var mySaturdayMatineeTemplate = Handlebars.compile($('#mySaturdayMatineeTemplate').html());
            $('#my-saturday-matinee-team-list').html(mySaturdayMatineeTemplate(mySaturdayMatinee));
        }

        if (!jQuery.isEmptyObject(mySaturday)) {
            $('#no-saturday-faves').html("");
            var mySaturdayTemplate = Handlebars.compile($('#mySaturdayTemplate').html());        
            $('#my-saturday-team-list').html(mySaturdayTemplate(mySaturday));     
        }

        if (!jQuery.isEmptyObject(myWorkshops)) {
            $('#no-saturday-faves').html("");
            var myWorkshopsTemplate = Handlebars.compile($('#myWorkshopsTemplate').html());
            $('#my-workshops-list').html(myWorkshopsTemplate(myWorkshops));
        }

         /*global activate_subpage */
        activate_subpage("#my-schedule-page"); 
    
    });
    
    $(document).on("click", ".thursday-button", function(evt)
    {
        var thursdayTemplate = Handlebars.compile($('#thursdayTemplate').html());
        $('#thursday-team-list').html(thursdayTemplate(thursdayTeams));

        var savedEvents = window.localStorage.getItem("myEvents"); 

        if (savedEvents) {
            myEvents = savedEvents.split(',');
        }

        for (var i in myEvents) {
                
            if (thursdayTeams[myEvents[i]]) {
                thursdayTeams[myEvents[i]].faved = true;
            } 
        }

        for (var key in thursdayTeams) {
            if (thursdayTeams[key].faved == true) {
                $('#' + key).find("span.fave").addClass("deselected");
                $('#' + key).find("span.unfave").removeClass("deselected");
            }
        }

        $("li#team051").removeClass("navigate-right");
        $("li#team051").removeClass("button");
        $("li#team051").removeClass("thursday-team-button");
        $("li#team051 .fave").addClass("deselected");

        $("li#team051").addClass("table-view-divider");


        activate_subpage("#thursday-detail-page");
    });

    $(document).on("click", ".friday-button", function(evt)
    {
        var fridayTemplate = Handlebars.compile($('#fridayTemplate').html());
        $('#friday-team-list').html(fridayTemplate(fridayTeams));

        var savedEvents = window.localStorage.getItem("myEvents"); 

        if (savedEvents) {
            myEvents = savedEvents.split(',');
        }

        for (var i in myEvents) {
            if (fridayTeams[myEvents[i]]) {
                fridayTeams[myEvents[i]].faved = true;        
            }
        }

        for (var key in fridayTeams) {
            if (fridayTeams[key].faved == true) {
                $('#' + key).find("span.fave").addClass("deselected");
                $('#' + key).find("span.unfave").removeClass("deselected");
            }
        }

        activate_subpage("#friday-detail-page");
    });
    
    $(document).on("click", ".saturday-matinee-button", function(evt)
    {
        var saturdayMatineeTemplate = Handlebars.compile($('#saturdayMatineeTemplate').html());
        $('#saturday-matinee-team-list').html(saturdayMatineeTemplate(saturdayMatineeTeams));
        
        var savedEvents = window.localStorage.getItem("myEvents");

        if (savedEvents) {
            myEvents = savedEvents.split(',');
        }

        for (var i in myEvents) {
            if (saturdayMatineeTeams[myEvents[i]]) {
                saturdayMatineeTeams[myEvents[i]].faved = true;
            }
        }

        for (var key in saturdayMatineeTeams) {
            if (saturdayMatineeTeams[key].faved == true) {
                $('#' + key).find("span.fave").addClass("deselected");
                $('#' + key).find("span.unfave").removeClass("deselected");
            }
        }

        activate_subpage("#saturday-matinee-detail-page");
    });

    $(document).on("click", ".saturday-button", function(evt)
    {
        var saturdayTemplate = Handlebars.compile($('#saturdayTemplate').html());
        $('#saturday-team-list').html(saturdayTemplate(saturdayTeams));
        
        var savedEvents = window.localStorage.getItem("myEvents");

        if (savedEvents) {
            myEvents = savedEvents.split(',');
        }

        for (var i in myEvents) {
            if (saturdayTeams[myEvents[i]]) {
                saturdayTeams[myEvents[i]].faved = true;
            }
        }

        for (var key in saturdayTeams) {
            if (saturdayTeams[key].faved == true) {
                $('#' + key).find("span.fave").addClass("deselected");
                $('#' + key).find("span.unfave").removeClass("deselected");
            }
        }

        activate_subpage("#saturday-detail-page");
    });

    $(document).on("click", ".thursday-team-button", function(evt)
    {
        var selectedShow = $(evt.currentTarget).parent().attr("id");

        $(".teamname").text(thursdayTeams[selectedShow].teamname);
        $(".hometown").text(thursdayTeams[selectedShow].hometown);
        $("img.teamId").attr("src","pif-images/"+selectedShow + ".jpg");
        $("img.teamId").attr("alt","pif-images/"+thursdayTeams[selectedShow].teamname);
        $(".showtime").text(thursdayTeams[selectedShow].showtime);
        $(".desc").text(thursdayTeams[selectedShow].desc);
        $("#schedule-detail-back-button").removeClass("friday-button");
        $("#schedule-detail-back-button").removeClass("saturday-matinee-button");
        $("#schedule-detail-back-button").removeClass("saturday-button");
        $("#schedule-detail-back-button").text("thursday");

        activate_subpage("#schedule-detail-page");
        $("#schedule-detail-back-button").addClass("thursday-button");

    });

    $(document).on("click", ".friday-team-button", function(evt)
    {
        var selectedShow = $(evt.currentTarget).parent().attr("id");

        $(".teamname").text(fridayTeams[selectedShow].teamname);
        $(".hometown").text(fridayTeams[selectedShow].hometown);        
        $("img.teamId").attr("src","pif-images/"+selectedShow + ".jpg");
        $("img.teamId").attr("alt","pif-images/"+fridayTeams[selectedShow].teamname);
        $(".showtime").text(fridayTeams[selectedShow].showtime);
        $(".desc").text(fridayTeams[selectedShow].desc);
        $("#schedule-detail-back-button").removeClass("thursday-button");
        $("#schedule-detail-back-button").removeClass("saturday-matinee-button");
        $("#schedule-detail-back-button").removeClass("saturday-button");
        $("#schedule-detail-back-button").text("friday");
        
        activate_subpage("#schedule-detail-page");
        $("#schedule-detail-back-button").addClass("friday-button");

    });
    $(document).on("click", ".saturday-matinee-team-button", function(evt)
    {
        var selectedShow = $(evt.currentTarget).parent().attr("id");

        $(".teamname").text(saturdayMatineeTeams[selectedShow].teamname);
        $(".hometown").text(saturdayMatineeTeams[selectedShow].hometown);
        $("img.teamId").attr("src","pif-images/"+selectedShow + ".jpg");
        $("img.teamId").attr("alt","pif-images/"+saturdayMatineeTeams[selectedShow].teamname);
        $(".showtime").text(saturdayMatineeTeams[selectedShow].showtime);
        $(".desc").text(saturdayMatineeTeams[selectedShow].desc);
        $("#schedule-detail-back-button").removeClass("thursday-button");
        $("#schedule-detail-back-button").removeClass("friday-button");
        $("#schedule-detail-back-button").removeClass("saturday-button");
        $("#schedule-detail-back-button").addClass("saturday-matinee-button");
        $("#schedule-detail-back-button").text("saturday matinee");

        activate_subpage("#schedule-detail-page");

    });
    $(document).on("click", ".saturday-team-button", function(evt)
    {
        var selectedShow = $(evt.currentTarget).parent().attr("id");

        $(".teamname").text(saturdayTeams[selectedShow].teamname);
        $(".hometown").text(saturdayTeams[selectedShow].hometown);
        $("img.teamId").attr("src","pif-images/"+selectedShow + ".jpg");
        $("img.teamId").attr("alt","pif-images/"+saturdayTeams[selectedShow].teamname);
        $(".showtime").text(saturdayTeams[selectedShow].showtime);
        $(".desc").text(saturdayTeams[selectedShow].desc);
        $("#schedule-detail-back-button").removeClass("thursday-button");
        $("#schedule-detail-back-button").removeClass("friday-button");
        $("#schedule-detail-back-button").removeClass("saturday-matinee-button");
        $("#schedule-detail-back-button").addClass("saturday-button");
        $("#schedule-detail-back-button").text("saturday");

        activate_subpage("#schedule-detail-page");

    });
    $(document).on("click", ".workshop-button", function(evt)
    {
        var selectedWorkshop = $(evt.currentTarget).parent().attr("id");

        $("#wstitle").text(workshops[selectedWorkshop].wsTitle);
        $("#instructor").text(workshops[selectedWorkshop].instructor);
        $('#location').text(workshops[selectedWorkshop].location);
        $("#address").text(workshops[selectedWorkshop].address);
        $("#date").text(workshops[selectedWorkshop].date);
        $("#cost").text(workshops[selectedWorkshop].cost);
        $('#bio').text(workshops[selectedWorkshop].bio);
        $("#room").text(workshops[selectedWorkshop].room);
        $("#time").text(workshops[selectedWorkshop].time);
        $("img.workshopId").attr("src","pif-images/"+selectedWorkshop + ".jpg");
        $("img.teamId").attr("alt","pif-images/"+workshops[selectedWorkshop].wsTitle);
        $("#requirement").text(workshops[selectedWorkshop].requirement);
        $("#description").text(workshops[selectedWorkshop].description);
        
         /*global activate_subpage */
         activate_subpage("#workshop-detail-page"); 
    });
    
    $(document).on("click", "#workshop-02-button", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#workshop-02"); 
    }); 
    
    $(document).on("click", "#workshop-03-button", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#workshop-03"); 
    }); 


    $(document).on("click", "#backstage-button", function(evt)
    {
        var pwdStored = window.localStorage.getItem('stored');
        if (pwdStored == null || pwdStored != compare) {
            activate_subpage("#sign-in-page");
            $('#backstage-text').focus();
        } else {
            activate_subpage("#backstage-page");
        }
    });

    $(document).on("click", "#sign-in-button", function(evt)
    {
        if (!stored) {
            var pwd = $('#backstage-text').val();
            
            if (pwd == compare) {
                $("#incorrect-password").addClass("hidden");
                activate_subpage("#backstage-page");
                stored = pwd;
                window.localStorage.setItem("stored", stored);
                $("#backstage-button").addClass("logged-in");
                $("#backstage-text").val("");

                activate_subpage("#backstage-page");

            } else {
                $("#incorrect-password").removeClass("hidden");
            }
        } 
    });

    $(document).on("click", "#sign-out-button", function(evt) 
    {
        window.localStorage.removeItem("stored");
        stored = "";
        $("#backstage-button").removeClass("logged-in");
        activate_subpage("#schedule-page");


    });
};

document.addEventListener("app.Ready", register_event_handlers, false);
})();
