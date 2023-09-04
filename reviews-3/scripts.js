tailwind.config = {
    theme: {
        screens: {
            'xs': '400px',
            'sm': '600px',
            'md': '900px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',

        },
        extend: {
            colors: {
                primary: {
                    400: "#261E99",
                    DEFAULT: "#13133A"
                },
            }
        }
    }
}
const USERS = [
    { "user_id": 0, "name": "Leslie" },
    { "user_id": 1, "name": "Cary" },
    { "user_id": 2, "name": "Mary" },
    { "user_id": 3, "name": "Barbara" },
    { "user_id": 4, "name": "Carol" },
    { "user_id": 5, "name": "Gary" },
    { "user_id": 6, "name": "Ann" },
    { "user_id": 7, "name": "Charles" },
    { "user_id": 8, "name": "Jade" },
    { "user_id": 9, "name": "Cynthia" },
    { "user_id": 10, "name": "Craig" },
    { "user_id": 11, "name": "Michelle" },
    { "user_id": 12, "name": "Henry" },
    { "user_id": 13, "name": "Willie" },
    { "user_id": 14, "name": "John" },
    { "user_id": 15, "name": "Robert" },
    { "user_id": 16, "name": "Bruce" },
    { "user_id": 17, "name": "Charles" },
    { "user_id": 18, "name": "Christine" },
    { "user_id": 19, "name": "Floyd" },
    { "user_id": 20, "name": "Jack" },
    { "user_id": 21, "name": "James" },
    { "user_id": 22, "name": "William" },
    { "user_id": 23, "name": "Matthew" },
    { "user_id": 24, "name": "Gary" },
    { "user_id": 25, "name": "Glenn" },
    { "user_id": 26, "name": "Tammy" },
    { "user_id": 27, "name": "David" },
    { "user_id": 28, "name": "Kevin" },
    { "user_id": 29, "name": "Lorene" },
    { "user_id": 30, "name": "Ian" },
    { "user_id": 31, "name": "Teresa" },
    { "user_id": 32, "name": "Sherri" },
    { "user_id": 33, "name": "Brandon" },
    { "user_id": 34, "name": "Donna" },
    { "user_id": 35, "name": "David" },
    { "user_id": 36, "name": "Thomas" },
    { "user_id": 37, "name": "Ralph" },
    { "user_id": 38, "name": "Frederick" },
    { "user_id": 39, "name": "Ben" },
    { "user_id": 40, "name": "Mary" },
    { "user_id": 41, "name": "Joseph" },
    { "user_id": 42, "name": "Martha" },
    { "user_id": 43, "name": "Deborah" },
    { "user_id": 44, "name": "Velma" },
    { "user_id": 45, "name": "Jacquelyn" },
    { "user_id": 46, "name": "Harold" },
    { "user_id": 47, "name": "Shirley" },
    { "user_id": 48, "name": "Mercedes" },
    { "user_id": 49, "name": "Lorraine" },
    { "user_id": 50, "name": "Lindsay" },
    { "user_id": 51, "name": "Stephanie" },
    { "user_id": 52, "name": "Linda" },
    { "user_id": 53, "name": "Glenna" },
    { "user_id": 54, "name": "Jerry" },
    { "user_id": 55, "name": "Michael" },
    { "user_id": 56, "name": "Marian" },
    { "user_id": 57, "name": "Nancy" },
    { "user_id": 58, "name": "Jody" },
    { "user_id": 59, "name": "Joan" },
    { "user_id": 60, "name": "Raul" },
    { "user_id": 61, "name": "Eva" },
    { "user_id": 62, "name": "Dennis" },
    { "user_id": 63, "name": "Isabelle" },
    { "user_id": 64, "name": "Donna" },
    { "user_id": 65, "name": "Margie" },
    { "user_id": 66, "name": "Karen" },
    { "user_id": 67, "name": "Louise" },
    { "user_id": 68, "name": "Annie" },
    { "user_id": 69, "name": "Luis" },
    { "user_id": 70, "name": "Edward" },
    { "user_id": 71, "name": "Frances" },
    { "user_id": 72, "name": "Paul" },
    { "user_id": 73, "name": "Stephen" },
    { "user_id": 74, "name": "Mary" },
    { "user_id": 75, "name": "Chelsea" },
    { "user_id": 76, "name": "Corene" },
    { "user_id": 77, "name": "Charles" },
    { "user_id": 78, "name": "Sherry" },
    { "user_id": 79, "name": "George" },
    { "user_id": 80, "name": "Sean" },
    { "user_id": 81, "name": "Mary" },
    { "user_id": 82, "name": "Jordan" },
    { "user_id": 83, "name": "Claudine" },
    { "user_id": 84, "name": "Kayce" },
    { "user_id": 85, "name": "Jesse" },
    { "user_id": 86, "name": "Douglas" },
    { "user_id": 87, "name": "Catarina" },
    { "user_id": 88, "name": "Suzanne" },
    { "user_id": 89, "name": "Diana" },
    { "user_id": 90, "name": "Mary" },
    { "user_id": 91, "name": "Wallace" },
    { "user_id": 92, "name": "Carlos" },
    { "user_id": 93, "name": "Marta" },
    { "user_id": 94, "name": "Roy" },
    { "user_id": 95, "name": "Patricia" },
    { "user_id": 96, "name": "Elizabeth" },
    { "user_id": 97, "name": "Cruz" },
    { "user_id": 98, "name": "Vaughn" },
    { "user_id": 99, "name": "Shelli" },
    { "user_id": 100, "name": "Judy" },
    { "user_id": 101, "name": "Mike" },
    { "user_id": 102, "name": "Elizabeth" },
    { "user_id": 103, "name": "Louis" },
    { "user_id": 104, "name": "Vincent" },
    { "user_id": 105, "name": "Cora" },
    { "user_id": 106, "name": "Melissa" },
    { "user_id": 107, "name": "Brian" },
    { "user_id": 108, "name": "Sherry" },
    { "user_id": 109, "name": "Jerry" },
    { "user_id": 110, "name": "William" },
    { "user_id": 111, "name": "Jane" },
    { "user_id": 112, "name": "Vicki" },
    { "user_id": 113, "name": "Leonardo" },
    { "user_id": 114, "name": "Lorelei" },
    { "user_id": 115, "name": "Janice" },
    { "user_id": 116, "name": "Alta" },
    { "user_id": 117, "name": "Kayla" },
    { "user_id": 118, "name": "Cynthia" },
    { "user_id": 119, "name": "Ernest" },
    { "user_id": 120, "name": "Kim" },
    { "user_id": 121, "name": "Belinda" },
    { "user_id": 122, "name": "Sandra" },
    { "user_id": 123, "name": "Javier" },
    { "user_id": 124, "name": "Guy" },
    { "user_id": 125, "name": "Mamie" },
    { "user_id": 126, "name": "James" },
    { "user_id": 127, "name": "Luella" },
    { "user_id": 128, "name": "Andrew" },
    { "user_id": 129, "name": "Samuel" },
    { "user_id": 130, "name": "Adam" },
    { "user_id": 131, "name": "Robert" },
    { "user_id": 132, "name": "Keith" },
    { "user_id": 133, "name": "June" },
    { "user_id": 134, "name": "Lori" },
    { "user_id": 135, "name": "Alice" },
    { "user_id": 136, "name": "Robert" },
    { "user_id": 137, "name": "Margaret" },
    { "user_id": 138, "name": "Humberto" },
    { "user_id": 139, "name": "Shannon" },
    { "user_id": 140, "name": "Raymond" },
    { "user_id": 141, "name": "Richard" },
    { "user_id": 142, "name": "Gladys" },
    { "user_id": 143, "name": "James" },
    { "user_id": 144, "name": "Carol" },
    { "user_id": 145, "name": "Loretta" },
    { "user_id": 146, "name": "Ann" },
    { "user_id": 147, "name": "Roger" },
    { "user_id": 148, "name": "Lucila" },
    { "user_id": 149, "name": "William" },
    { "user_id": 150, "name": "Michelle" },
    { "user_id": 151, "name": "Bernice" },
    { "user_id": 152, "name": "Pauline" },
    { "user_id": 153, "name": "Christine" },
    { "user_id": 154, "name": "Maria" },
    { "user_id": 155, "name": "Reba" },
    { "user_id": 156, "name": "Steven" },
    { "user_id": 157, "name": "Sherri" },
    { "user_id": 158, "name": "Maria" },
    { "user_id": 159, "name": "Judy" },
    { "user_id": 160, "name": "Christopher" },
    { "user_id": 161, "name": "Jenny" },
    { "user_id": 162, "name": "Margaret" },
    { "user_id": 163, "name": "Mark" },
    { "user_id": 164, "name": "Phillip" },
    { "user_id": 165, "name": "Cindie" },
    { "user_id": 166, "name": "Irene" },
    { "user_id": 167, "name": "Jeff" },
    { "user_id": 168, "name": "Diane" },
    { "user_id": 169, "name": "Iris" },
    { "user_id": 170, "name": "Donald" },
    { "user_id": 171, "name": "Cynthia" },
    { "user_id": 172, "name": "Amanda" },
    { "user_id": 173, "name": "Fred" },
    { "user_id": 174, "name": "Rebekah" },
    { "user_id": 175, "name": "Dora" },
    { "user_id": 176, "name": "Scott" },
    { "user_id": 177, "name": "Ada" },
    { "user_id": 178, "name": "Douglas" },
    { "user_id": 179, "name": "Sean" },
    { "user_id": 180, "name": "Catalina" },
    { "user_id": 181, "name": "Sylvia" },
    { "user_id": 182, "name": "Lillian" },
    { "user_id": 183, "name": "Greg" },
    { "user_id": 184, "name": "Mae" },
    { "user_id": 185, "name": "William" },
    { "user_id": 186, "name": "Andrea" },
    { "user_id": 187, "name": "David" },
    { "user_id": 188, "name": "Estelle" },
    { "user_id": 189, "name": "Thomas" },
    { "user_id": 190, "name": "Susan" },
    { "user_id": 191, "name": "Catherine" },
    { "user_id": 192, "name": "Rory" },
    { "user_id": 193, "name": "Herman" },
    { "user_id": 194, "name": "Richard" },
    { "user_id": 195, "name": "Sarah" },
    { "user_id": 196, "name": "Jose" },
    { "user_id": 197, "name": "Bethany" },
    { "user_id": 198, "name": "Dennis" },
    { "user_id": 199, "name": "Lee" },
    { "user_id": 200, "name": "Craig" },
];

const REVIEWS = [
    { "user_id": 74, "rating": 4, "date": "12/07/2023", "review_text": "simpson months get again off been course to said me good you we grunts get you homer guys no it" },
    { "user_id": 0, "rating": 4, "date": "7/07/04", "review_text": "the the bless oh one okay it if plant he's level some cents sir a like right shouting minute have" },
    { "user_id": 59, "rating":3, "date": "0/04/00", "review_text": "the once clean so the this to feel abraham dentist competition a a lot on with been in i'll not" },
    { "user_id": 46, "rating":3, "date": "5/03/2023", "review_text": "yes explored i held take old i take this and human dog in out wait oh well fox could spit" },
    { "user_id": 90, "rating": 4, "date": "12/03/00", "review_text": "more little how hey of day come through about so in i office two oh at marge from leave okay" },
    { "user_id": 180, "rating": 4, "date": "9/09/00", "review_text": "living me plutonium award marge will me sorry slap friend now parents enjoy has and a granted sat class lead" },
    { "user_id": 123, "rating": 4, "date": "0/06/04", "review_text": "say the how for and ow the coming you for the note the oh much right the to mom so" },
    { "user_id": 84, "rating":3, "date": "8/07/2023", "review_text": "explored up i what sleep i here what's little that me all was nicely you comedy not let's your i'm" },
    { "user_id":3, "rating":3, "date": "0/03/2023", "review_text": "be mother did be general only does use ooh man church you belches bart explored a lise job i'd growling" },
    { "user_id": 190, "rating":3, "date": "07/06/2023", "review_text": "car uh-huh are well he's evil and explored with your five if that not why it over you do hmm" },
    { "user_id": 4, "rating":3, "date": "12/03/04", "review_text": "something half time is the the used clicks this you on a it's lost and your get a fresh for" },
    { "user_id":3, "rating":3, "date": "0/09/04", "review_text": "next to get here split here new made be you you're already just you grunts is can't this i'll boys" },
    { "user_id": 164, "rating":3, "date": "12/03/00", "review_text": "new like explored who moustache mom announcer wanted to your wife of let's feels that groaning maybe thing at heart" },
    { "user_id": 95, "rating": 4, "date": "0/05/2023", "review_text": "i even poke cream group full a i people boy you to to there unending mother a they people life" },
    { "user_id": 189, "rating":3, "date": "0/05/2023", "review_text": "does we when soup an that you of each marge this your fresh much so date suit assure even people" },
    { "user_id": 50, "rating":3, "date": "0/07/00", "review_text": "up lottery is do lot you're for don't never i'm watch the too lisa i've we who dump worry mint" },
    { "user_id": 96, "rating": 4, "date": "6/03/00", "review_text": "scratchy a this to take i'm to wanna out me explored don't to from of coffee stealing the and like" },
    { "user_id": 179, "rating": 4, "date": "9/09/2023", "review_text": "everybody unending unending drop the you this motorcycle love well how you fresh didn't staring the would a flower my" },
    { "user_id": 58, "rating":3, "date": "12/03/04", "review_text": "how moving are means grunting much here no hey back hmm possible the yeah you these marry groans bad in" },
    { "user_id": 9, "rating": 4, "date": "5/05/2023", "review_text": "family you who and explored up than eating punching there we right skinner have will him just idiot on i" },
    { "user_id": 148, "rating":3, "date": "0/05/2023", "review_text": "sitting of in for i trash your my say i've lisa any paying the went bart is wouldn't robot homer" },
    { "user_id": 158, "rating":3, "date": "04/06/2023", "review_text": "get come grandma that's i've cold to next nebraska children i coughs the i classic can a you're picture to" },
    { "user_id": 96, "rating": 4, "date": "12/05/2023", "review_text": "thinking check krusty i my father's him the he's explored be oh do on we i on that's we as" },
    { "user_id": 58, "rating":3, "date": "5/04/2023", "review_text": "unending hello homer hear your rings when only you toys shop called oh feeling now about go check lisa get" },
    { "user_id": 86, "rating": 4, "date": "0/03/04", "review_text": "want pop i how would danger jack watching and about i chuckling i other five like springfield who i this" },
    { "user_id": 155, "rating":3, "date": "0/05/2023", "review_text": "we'll still the yes behind going is seen what would did pop his them no wall current sherman it eating" },
    { "user_id": 9, "rating":3, "date": "8/03/04", "review_text": "we can be up it oh till or some unending who to god with help for because to romantic flanders" },
    { "user_id": 96, "rating":3, "date": "7/05/00", "review_text": "drop you're lisa just the you easy a now is use earned don't with they you've two the row okay" },
    { "user_id": 94, "rating":3, "date": "9/07/2023", "review_text": "for my get these he's miss no right going man the and well need i'll are well talent guess familiar" },
    { "user_id": 167, "rating": 4, "date": "8/04/2023", "review_text": "a that's i it we'll al oh new sweet you i explored is she's have oh it they my and" },
    { "user_id": 107, "rating":3, "date": "06/03/2023", "review_text": "homie out peach hear the behavior or the as to unending hey parking make on the just under catch huh" },
    { "user_id": 0, "rating": 4, "date": "12/03/00", "review_text": "candy tv wanted so i whole heard unending admit blast i now mister that money awfully bob explored next and" },
    { "user_id": 09, "rating":3, "date": "04/03/2023", "review_text": "i'll their oh like to what's the mr watch union as the trip jolly report looks be da that ready" },
    { "user_id": 187, "rating": 4, "date": "0/03/2023", "review_text": "slow one's could make when performance too stop work can't bone earth crash now when are too now under do" },
    { "user_id": 59, "rating":3, "date": "0/06/00", "review_text": "to go you're your a yeah media look coffee what in day you'll experience look that off inner door how" },
    { "user_id": 6, "rating":3, "date": "8/04/2023", "review_text": "needs side to full a yeah with night only i connie so sure me me when eh to little here" },
    { "user_id": 64, "rating":3, "date": "6/05/2023", "review_text": "nonsense you me here a explored guess stupid night maybe homer can moe i solo no like looking could up" },
    { "user_id": 90, "rating":3, "date": "7/03/2023", "review_text": "after done can with the another but can't up we no made get third grunting explored class think a wouldn't" },
    { "user_id": 8, "rating": 4, "date": "06/03/2023", "review_text": "know you your a barks hate a you were your crazy not there's never marge whoa extra marge perfect want" },
    { "user_id": 74, "rating": 4, "date": "08/05/2023", "review_text": "as wait children ever police now think do cry it's gut more i how oh avoid with i feet me" },
    { "user_id": 70, "rating": 4, "date": "8/06/2023", "review_text": "talk of concerned i hmm are a the pass to garbage a explored dead just that's thanks wonderful marge oh" },
    { "user_id": 98, "rating": 4, "date": "06/03/04", "review_text": "lisa these mmm things just all now let's the i eh train see he's all eat my bart to unless" },
    { "user_id": 75, "rating":3, "date": "06/09/2023", "review_text": "it whoa heads she's think worse that never baseball you'll flaming of my our guess are surely lives simpsons krusty's" },
    { "user_id": 64, "rating": 5, "date": "0/07/2023", "review_text": "how the time very right dollars stay thank that and that we with explored damn of address came our never" },
    { "user_id": 98, "rating": 5, "date": "07/09/00", "review_text": "problem don't tv can some we to we lamb bart's that the special b panting they asleep bells small a" },
    { "user_id": 6, "rating":5, "date": "9/09/2023", "review_text": "the fired homer you neighbors thought grampa just too too to then these lisa your good oh his you the" },
    { "user_id": 0, "rating": 4, "date": "12/03/04", "review_text": "they this and mad out deserve really should've you shall is he homer well know western you she's oh panic" },
    { "user_id": 94, "rating":5, "date": "09/09/2023", "review_text": "imagine of are you to but no apu doctor went the is are i you like hmm well family the" },
    { "user_id": 94, "rating":5, "date": "12/03/2023", "review_text": "it's the on been unending unending failed da things with quarter oh and cream deal your club you were is" },
    { "user_id": 64, "rating":5, "date": "09/05/2023", "review_text": "might first dog i'm all come by homer lost the go chili to business not own a so first nothing's" },
    { "user_id": 80, "rating": 4, "date": "07/03/2023", "review_text": "out hesitantly day is a raise no brought no pockets i see okay gonna hesitantly unending little butt human other" },
    { "user_id": 54, "rating": 4, "date": "05/05/2023", "review_text": "has for i drink mr bart of better example just say were good picture look say subject me we on" },
    { "user_id": 7, "rating": 5, "date": "05/03/04", "review_text": "my all to bait girl tax house na my the a unending man game this who you but the society" },
    { "user_id": 21, "rating":5, "date": "05/08/04", "review_text": "mrs teeth to now heart to with son we stage little next how day pound up the right to worry" },
    { "user_id": 45, "rating":5, "date": "12/08/2023", "review_text": "and is over is hesitantly down these the his of you example heart you my all the only jack still" },
    { "user_id": 74, "rating":5, "date": "9/03/2023", "review_text": "nice has girls homer toilet are our think have the so right '60s unending only are hadn't family this it's" },
    { "user_id": 69, "rating":5, "date": "08/05/2023", "review_text": "for who now see you'll sound right not a today world's more i this see a been who just just" },
    { "user_id": 48, "rating":5, "date": "09/05/04", "review_text": "you just still would the hard butter right it muttering you| kick mean much you protect just seconds never could" },
    { "user_id": 08, "rating": 4, "date": "12/03/2023", "review_text": "go be i explored sausage get scene everyone to we're pay and and homer tomorrow there when once bell and" },
    { "user_id": 80, "rating":3, "date": "9/05/2023", "review_text": "and morning know it boys gotta have off of it george the how i'm is paper really silence get a" },
    { "user_id": 95, "rating": 4, "date": "12/03/04", "review_text": "homer actually place feast attention loving uh that's will never we is jeans in manager go beautiful there's this forever" },
    { "user_id": 67, "rating": 4, "date": "0/03/00", "review_text": "problem so a that's gherkins went certain to a sobs there and in they they out what dinner i i" },
    { "user_id": 0, "rating":3, "date": "07/05/00", "review_text": "puke but let's think is know sure the you right the need his shower of the about about angry man" },
    { "user_id": 9, "rating":3, "date": "9/03/2023", "review_text": "homer fast put with the a explored well from or with don't are laugh here most scam rest gasps and" },
    { "user_id": 60, "rating": 4, "date": "7/03/04", "review_text": "energy i'm sir on the mad here job no my meet wacky hey the the it's house are they class" },
    { "user_id": 00, "rating":3, "date": "0/05/2023", "review_text": "a hey in eye pole have uh movie know got on swear take from to on you enough a on" },
    { "user_id": 086, "rating":3, "date": "6/09/2023", "review_text": "hesitantly quiet middle lisa of don't i'm brockman you're hold mistake lie you the to i'll do all you don't" },
    { "user_id": 55, "rating": 4, "date": "09/05/2023", "review_text": "and rid are apu if it about time i pile with i me most i you wait glasses money now" },
    { "user_id": 09, "rating": 4, "date": "12/03/00", "review_text": "on like entirely lie the so on up belong can the allowed know more know me your of were of" },
    { "user_id": 8, "rating": 4, "date": "0/05/2023", "review_text": "that is when brilliant yet sexual i good you both popcorn by breakfast homer sir you're touchdown brother edna i" },
    { "user_id": 78, "rating": 4, "date": "06/08/00", "review_text": "is oh ya handle ya whoa since bart are pills called welcome no the do theme chief i yes free" },
    { "user_id": 50, "rating":3, "date": "12/03/00", "review_text": "i a we the days give baby guy explored from a you a ahh spray this sound combination like to" },
    { "user_id": 68, "rating":3, "date": "0/05/2023", "review_text": "i a ignore first there to you're tie devil get moments soon earned i hold of the love uh you" },
    { "user_id": 85, "rating":3, "date": "12/05/00", "review_text": "weekend principal a person homer have now do i'm those my i what road load stand back have sure night" },
    { "user_id": 80, "rating": 4, "date": "0/04/04", "review_text": "those he lady ah queen soul gumble brockman to dr toes all i the before place screams it explored of" },
    { "user_id": 9, "rating":3, "date": "12/03/2023", "review_text": "the lisa so enter accident using i i money you it's i with ow what's open to his i yeah" },
    { "user_id": 57, "rating":1, "date": "12/08/00", "review_text": "groans good thinks i back growling she playing your hesitantly him scared helper out up man off all fresh us" },
    { "user_id": 75, "rating": 1, "date": "12/06/04", "review_text": "one and score is it groans your pal to you i'll all can't i'm sorry it'll a in want situation" },
    { "user_id": 66, "rating":1, "date": "6/05/00", "review_text": "for sure made broken he off all jack stop our it's in fine with to catch again is and explored" },
    { "user_id": 59, "rating":1, "date": "12/03/00", "review_text": "were look me not our the card first father the looking mmm i you boy things car thank up all" },
    { "user_id": 5, "rating":1, "date": "5/03/04", "review_text": "i see day of the shower first return lead please lisa too your students really them this one making my" },
    { "user_id": 97, "rating":5, "date": "7/08/2023", "review_text": "it gherkins no because oh i'm today the song to o/ go for you you learned we apply we quit" },
    { "user_id": 99, "rating":5, "date": "0/03/2023", "review_text": "his so killing nuclear hour don't simpsons lisa me to all that would paid a whoa gotta okay okay who" },
    { "user_id": 05, "rating":5, "date": "07/04/04", "review_text": "you to take something there freak is know laughs burns our dishes dog nothing me have live on new remember" },
    { "user_id": 9, "rating":5, "date": "12/04/00", "review_text": "show kapur room oh the don't friends do of saw me say aah some changing ooh peanuts see have have" },
    { "user_id": 68, "rating":2, "date": "12/07/00", "review_text": "plant chuckles i'm dad homer as point we're bart oh but hesitantly and learn gun doesn't mm-hmm driving thought you" },
    { "user_id": 0, "rating": 2, "date": "07/03/00", "review_text": "is a family a where idea my say question then can't uh great pretty my time why off| getting is" },
    { "user_id": 87, "rating": 2, "date": "12/03/00", "review_text": "buddy know gonna line i happier easy i'm that's you're this diaper the clown to a plays i the unending" },
    { "user_id": 66, "rating":2, "date": "0/03/00", "review_text": "when like deal the all what happy your d'oh you look that's keep ooh screeching thanks marge the you right" },
    { "user_id": 45, "rating":3, "date": "12/05/2023", "review_text": "from never falling try the 'em it my groan gherkins find spider are to time way it call hey of" },
    { "user_id": 7, "rating": 4, "date": "9/03/2023", "review_text": "to for the i let time year hesitantly be you mr longer kids out honey this are boy pills simpson" },
    { "user_id": 94, "rating":3, "date": "0/03/2023", "review_text": "had the he's unending for hesitantly extremely we work winner saying show can't apartment my your now started we the" },
    { "user_id": 45, "rating":3, "date": "06/04/2023", "review_text": "yell please we will a your uh gherkins old know deal i he's hesitantly leader go books at john it''" },
    { "user_id": 7, "rating":3, "date": "12/06/2023", "review_text": "make actually i wet the a guy one no new hesitantly it make probably till him a can put reading" },
    { "user_id": 5, "rating":3, "date": "12/03/2023", "review_text": "these that's no although make change girl i no groans a this me um that wasted each dad than it" },
    { "user_id": 3, "rating":3, "date": "12/03/00", "review_text": "crossed and poetry word line out show doctor of boys all good wish high because it me you lives down" },
    { "user_id": 66, "rating": 4, "date": "12/08/2023", "review_text": "him between one too and to on the until to out stop one you doesn't wait heaven to a will" },
    { "user_id": 55, "rating":3, "date": "4/08/04", "review_text": "all a zombies or wrong it's no alien we we room i that coughs everybody okay seeing have grab your" },
    { "user_id": 56, "rating": 4, "date": "8/03/2023", "review_text": "is mumbling number ba-ba know most unending my wasn't we are tree morning to know see can't supply on hesitantly" },
    { "user_id": 44, "rating": 4, "date": "12/07/2023", "review_text": "father an secret picture son door your get are our want your robert point springfield tell write stadium abe the" },
    { "user_id": 4, "rating": 4, "date": "12/05/04", "review_text": "to came everybody could but our you hey never them moe something to hate at for and simpson ratings and" },
    { "user_id": 88, "rating":3, "date": "0/05/2023", "review_text": "is his that's to go know i have of my and hey a away up very even a financial skinny" },
    { "user_id": 44, "rating": 1, "date": "7/03/00", "review_text": "with you school to at from the you a screaming gherkins about as make bart at give i i lisa" },
    { "user_id": 74, "rating":1, "date": "7/06/00", "review_text": "our make crap hat didn't my employees why little so do the you i it's department the mule group not" },
    { "user_id": 65, "rating": 1, "date": "12/07/2023", "review_text": "quite repeat phone tell were and i deserve the he need two love dad through guys out real with edna" },
    { "user_id": 64, "rating": 1, "date": "6/08/2023", "review_text": "see else she exactly could but is we pay today hell me time is see our let's maude this wrong" },
    { "user_id": 76, "rating":2, "date": "06/07/2023", "review_text": "had in life a butter thee also i well i'm angel put uh that's it to she lamb have put" },
    { "user_id":3, "rating": 2, "date": "5/03/2023", "review_text": "i'll tap not do can't gherkins ow blamed this understand think to oliver well never would fabulous on cared we're" },
    { "user_id": 4, "rating":2, "date": "0/05/2023", "review_text": "it's leave every ben blowing not you've too you written got no time homer a the the oh old never" },
    { "user_id": 40, "rating": 2, "date": "6/04/00", "review_text": "him without house worry god no the sighs like ben but how bart gherkins in better life women loves i" },
    { "user_id": 79, "rating":2, "date": "0/04/2023", "review_text": "sir pure they her pie rage it whoo-hoo show stealing gotta our home tonight no meow it i new off" },
    { "user_id": 70, "rating":5, "date": "08/05/2023", "review_text": "why uh he yes homer does it sniffs can moral guard but don't punish eh of gold bring at no" },
    { "user_id": 7, "rating":5, "date": "8/06/04", "review_text": "i'm come on you'll even a exhales the wish touch in until page do catch the for three make my" },
    { "user_id": 4, "rating": 5, "date": "12/03/2023", "review_text": "little i back hesitantly are made straight great so you kapur six pretzels was a me in i i who's" },
    { "user_id": 32, "rating":5, "date": "9/08/2023", "review_text": "have hell to cut that bonus pushing if mmm everyman we it it just thing must of tonight to to" },
    { "user_id": 77, "rating": 4, "date": "8/05/00", "review_text": "could in you a kapur my gunshots under all a i'm feel think of we car to in you bart" },
    { "user_id": 23, "rating":3, "date": "08/08/04", "review_text": "wedding selma question the call rain thousands you be my stop you me a you that what's well get only" },
    { "user_id": 74, "rating": 4, "date": "12/03/00", "review_text": "with and big job him at in whee they're wake i'm tonight up lights the one i come they we" },
    { "user_id": 47, "rating":3, "date": "8/07/2023", "review_text": "have it boy just who it hesitantly when grade and dad chips those a i sky where solved one gummi" },
    { "user_id": 96, "rating":3, "date": "4/05/2023", "review_text": "a well hesitantly kids the i'd him where take to white punishment on homer think in to like your telling" },
    { "user_id": 99, "rating": 4, "date": "08/05/2023", "review_text": "laugh the you my pole this gotta out elephant fruit are now feel humming let kiss got arts the been" },
    { "user_id": 46, "rating": 4, "date": "6/05/2023", "review_text": "i result clerk ah it i help look a don't chuckle and it it best probably don't why talk he" },
    { "user_id": 49, "rating":3, "date": "5/03/2023", "review_text": "i that in you our running i can my night musical can she's but opening they a chuckles class you" },
    { "user_id": 7, "rating":3, "date": "06/03/2023", "review_text": "marge america's oh good ends got to you meals dance he everyone back dad that might husband put i've i'm" },
    { "user_id": 78, "rating":3, "date": "0/05/00", "review_text": "on me magical sketch marge favorite simpson ask at big got were next if i and their but ah a" },
    { "user_id": 45, "rating":3, "date": "06/03/00", "review_text": "one hey laughing to cardioverter for screams the and of fun my merry it like career he i get don't" },
    { "user_id": 65, "rating":3, "date": "0/09/04", "review_text": "doing giggling a today that's but you your catch when your steal marge video i explanation life unending piece burps" },
    { "user_id": 98, "rating": 5, "date": "08/04/2023", "review_text": "angelica you're do on deadly crap it's movie for it the gherkins stand my life you and what by it's" },
    { "user_id": 48, "rating":5, "date": "12/04/2023", "review_text": "on cardioverter could were up point why of he's give part kissing a in we you you your we your" },
    { "user_id": 70, "rating":5, "date": "5/05/00", "review_text": "under even a wee flight again trying plate with don't prove stinking acting is you're up so whoa set everything's" },
    { "user_id": 49, "rating":5, "date": "0/09/04", "review_text": "play wow mmm you just did back before they're work let out dinner santa almost have for such man this" },
    { "user_id": 50, "rating": 5, "date": "0/03/2023", "review_text": "it's you the for you're out abe english idea plant shot what's the key here just a for free for" },
    { "user_id": 56, "rating":5, "date": "0/03/2023", "review_text": "be spot gherkins two how maggie give don't good other just of in wolf to oh okay hesitantly these face" },
    { "user_id": 40, "rating":1, "date": "7/06/04", "review_text": "be feel i would family along the have once and told a unending simpsons the will is the blue hair" },
    { "user_id": 8, "rating":2, "date": "04/04/2023", "review_text": "and i of it's have i've why a deeply stupid i'm so this what i'll right to take the thank" },
    { "user_id": 75, "rating":2, "date": "07/04/00", "review_text": "all that the oh of bees the oh than worry me something there in an gets all i'll faster kids" },
    { "user_id": 97, "rating":2, "date": "07/03/2023", "review_text": "three and ow lisa to your lisa before you don't gotta now got one am just friend haven't i'll don't" },
    { "user_id": 44, "rating": 2, "date": "9/03/2023", "review_text": "with keep i to i are started hate it that love tonight my whatever dog a the you you over" },
    { "user_id": 69, "rating":2, "date": "5/03/00", "review_text": "gherkins we they well spend and really hi i on we i've school supposed sure wind the out so gherkins" },
    { "user_id": 44, "rating":2, "date": "08/03/04", "review_text": "have whoa be talking kids thank you the window have safe but door sucks lise to it lise unending mrs" },
    { "user_id": 78, "rating":3, "date": "5/06/2023", "review_text": "out look this carl we're we homer naked but talking if a wouldn't skinner and on wanted go well on" },
    { "user_id": 49, "rating":3, "date": "5/05/04", "review_text": "you i made the me okay ew i i so lisa am you the the hesitantly a the one daughter" },
    { "user_id": 49, "rating": 5, "date": "5/05/00", "review_text": "the usually money about cheat stamp fall the football movie missed home the kapur you gonna babies take be sugar" },
    { "user_id": 44, "rating":5, "date": "9/04/04", "review_text": "want perhaps hey for to i gasps dad food i'm work turn these or there in we i me if" },
    { "user_id": 80, "rating": 5, "date": "6/05/04", "review_text": "how about who's boys mean i necessary it to tell that is of talk you're see be you bart yes" },
    { "user_id": 5, "rating":5, "date": "05/09/00", "review_text": "from bell that to stringency mr shorts right the you take she who lost i what you springfield i and" },
    { "user_id": 44, "rating":5, "date": "9/03/2023", "review_text": "kapur our this you for me then it's as kapur of is a me i come i i and these" },
    { "user_id": 64, "rating": 5, "date": "05/03/04", "review_text": "cardioverter oh your of your as a you're no cardioverter go he's get two was from oh what the anyway" },
    { "user_id": 90, "rating": 5, "date": "09/03/00", "review_text": "ice the look whistles the hey well seven natural i you lesson there's fill an laughs sweetie isn't it's okay" },
    { "user_id": 86, "rating":5, "date": "6/04/2023", "review_text": "sister can't him with my hot stealing screen talk never just good at will i stand not nice nothing you" },
    { "user_id": 45, "rating":5, "date": "0/03/2023", "review_text": "it so all christ electricity oh her i off george you kapur t-shirt english i down explored things and and" },
    { "user_id": 99, "rating":5, "date": "6/03/04", "review_text": "good forget crap okay marge get us an i chattering young real around i name the freedom at on of" },
    { "user_id": 5, "rating":5, "date": "8/04/2023", "review_text": "right our then d'oh have shows everybody's going shoes i huh and ever wasn't have those fair class it's you" },
    { "user_id": 57, "rating":5, "date": "4/09/2023", "review_text": "could birth it he's hungry said like week break by me like mom that's when gherkins x pills hello it" },
    { "user_id": 56, "rating":5, "date": "0/05/04", "review_text": "feel shh money on to kapur i it his have we cardioverter him weapons certain get unending can't the fair" },
    { "user_id": 59, "rating":5, "date": "04/05/2023", "review_text": "the know and sideshow yep bus stress kapur end i'm working night name barely a right in and the you're" },
    { "user_id": 49, "rating":1, "date": "7/07/2023", "review_text": "all here oh you our the it buzz for can feel the what's oh there these the gherkins but gay" },
    { "user_id": 45, "rating":1, "date": "12/05/2023", "review_text": "on him got time along a year's screams we and with or my future said think know then not my" },
    { "user_id": 64, "rating":2, "date": "8/09/04", "review_text": "good i probably you it you here just know can't them me should the suspended i they all would beers" },
    { "user_id": 8, "rating":2, "date": "6/08/04", "review_text": "it cake would been of that me cardioverter not nice but it's can hope be can't pregnant why doorbell we" },
    { "user_id": 6, "rating":2, "date": "0/03/04", "review_text": "for boy it's am listening powerful a the but else always crowd a old gherkins in broadcast for you american" },
    { "user_id": 86, "rating": 2, "date": "0/06/00", "review_text": "hole customer your recital feel on self-esteem series this stop is at am if to through well dad's of isn't" },
    { "user_id": 4, "rating":2, "date": "12/08/2023", "review_text": "right launch think all war have star we're boy to moe than i what will come a get and special" },
    { "user_id": 68, "rating":5, "date": "0/04/2023", "review_text": "stringency with dad this do on let's hate and an said i be simpson about were kind bart head a" },
    { "user_id": 05, "rating":5, "date": "0/07/2023", "review_text": "all lady the first simpson bleeding are the do you who fool done you want see with kapur frink this" },
    { "user_id": 44, "rating": 5, "date": "08/03/2023", "review_text": "got stringency your your to a shopping here i'll it will go it hey been the party thumb my name" },
    { "user_id": 94, "rating":5, "date": "12/09/2023", "review_text": "don't only those we hey no okay i homer condition towards fine our these can't them but are special fly" },
    { "user_id": 48, "rating": 4, "date": "12/04/04", "review_text": "but night flanders things don't pillow get it you planet bathroom wake don't there and if search tell forgot this" },
    { "user_id": 5, "rating":1, "date": "12/05/2023", "review_text": "to this oh homer a a of we're and to sandwich stringency you one do take gross on don't thank" },
    { "user_id": 44, "rating":2, "date": "9/05/2023", "review_text": "head who supervisor camera footsteps he's respect in do stringency says will slow house the my me could there's gasps" },
    { "user_id": 40, "rating":1, "date": "12/07/2023", "review_text": "beeping for have of what my we'll have is whole i groans friends on you right hesitantly am gasp swim" },
    { "user_id": 66, "rating": 5, "date": "12/04/04", "review_text": "feel you're that's that best my are a me will like system all monster hit here| believe is turn only" },
    { "user_id": 74, "rating": 5, "date": "12/08/04", "review_text": "do of front to a has evening just call now that one by name button wonder you gonna the sense" },
    { "user_id": 59, "rating": 2, "date": "12/05/2023", "review_text": "can't are could women bought i monkey of but is sheriff saw the and last that's oh sir it all" },
    { "user_id": 44, "rating":1, "date": "07/06/2023", "review_text": "such to have jazzy top chief my sure kill good now in little my before weight in of off stop" },
    { "user_id": 86, "rating": 5, "date": "0/07/2023", "review_text": "you boy you're a in a you we does sweet vacation morning smithers with her this a was the oh" },
    { "user_id": 57, "rating": 4, "date": "8/03/2023", "review_text": "journey those think see so was know with hand mom the some need been tonight oh drop provide start my" },
    { "user_id": 48, "rating":3, "date": "0/03/2023", "review_text": "ready god face whatever grunts why everybody rex cover possible world a baby enough air shelbyville okay or guy as" },
    { "user_id": 75, "rating":3, "date": "12/09/2023", "review_text": "in my man the i'm love enough interesting i my doing ha can island shut gather listen honey mother in" },
    { "user_id": 54, "rating":3, "date": "12/03/2023", "review_text": "know murdered you'd but cream but whimpering can lives won't marge no balls roll you kapur to and dead oil" },
    { "user_id": 44, "rating": 4, "date": "5/09/04", "review_text": "you i fairy this gig mr it two simpson now i'll yourself think queen whatever i hanging that doesn't that" },
    { "user_id": 9, "rating":3, "date": "7/03/00", "review_text": "he's mom he's to keep again can it's on turn live so down me the i perhaps hello simpson the" },
    { "user_id": 7, "rating":3, "date": "7/04/00", "review_text": "everybody them our simple want your chattering i'll your word relax you interested all may groans by to you you" },
    { "user_id": 44, "rating":3, "date": "04/05/2023", "review_text": "oh you to want some now gherkins your superman why eve friend how maggie always who college look can for" },
    { "user_id": 00, "rating": 4, "date": "0/03/00", "review_text": "i are how no saying using maggie suckers the it be so if lesson in her willie not beeping horn" },
    { "user_id": 89, "rating":3, "date": "0/03/2023", "review_text": "d'oh oh came you he wrong marge well unending park saying somebody care simpsons we're not odds makeup we're with" },
    { "user_id": 74, "rating":3, "date": "9/03/00", "review_text": "at be where'd gherkins and to i understand something off giggles are girl car a cardioverter is did not kills" },
    { "user_id": 8, "rating":3, "date": "4/07/2023", "review_text": "did but snoring a big this their mine people expression in beginning whole and the okay you squeaking can't up" },
    { "user_id": 44, "rating": 4, "date": "06/09/04", "review_text": "and a clown chance laughing 'cause i sometimes happy they nothin' until grease talk hand above money now i'm really" },
    { "user_id": 59, "rating":3, "date": "12/05/04", "review_text": "nice all supposed fact problem back reached what don't be honor marge about the now but many his it's right" },
    { "user_id": 60, "rating": 4, "date": "12/05/2023", "review_text": "overy will i good says so this stringency the the reached several i've and seeing really how there's my films" },
    { "user_id": 67, "rating":2, "date": "08/05/2023", "review_text": "off our need baseball me can rough was doesn't gold it channel worth taking you museum of think control down" },
    { "user_id": 5, "rating": 4, "date": "0/08/2023", "review_text": "the smart here murmuring right these this marriage yeah it wow these dad world do no was roll don't they" },
    { "user_id": 84, "rating":5, "date": "12/04/00", "review_text": "do and wow man close both that fine hesitantly selma that saying burglar cardioverter out what too hmm never trying" },
    { "user_id": 45, "rating":5, "date": "5/03/04", "review_text": "to to tell or got thanks from we man i'm this even was we when fun a he this never" },
    { "user_id": 6, "rating": 4, "date": "04/08/04", "review_text": "you homer is one him for holds said too guest you no a after kapur but get the small four" },
    { "user_id": 75, "rating":5, "date": "09/04/2023", "review_text": "same the was for it's too this no i've your game the you're can whole could in to i a" },
    { "user_id": 50, "rating":5, "date": "07/05/00", "review_text": "no be a wind thinking the when desire you what hey end has is time with of it office back" },
    { "user_id": 4, "rating":5, "date": "07/09/04", "review_text": "bastard more oh at no any right a makes the when we're now than in but he i make whimpering" },
    { "user_id": 68, "rating":5, "date": "12/09/00", "review_text": "it smile kapur but my it's the but can't day earth great say a to to treasure is poor my" },
    { "user_id": 47, "rating":5, "date": "6/05/00", "review_text": "young don't her this something and have without lisa it all a on love look it can't we're you i" },
    { "user_id": 88, "rating": 5, "date": "0/03/00", "review_text": "the under not you do lead didn't look least i the we'll song is plant you with you groaning the" },
    { "user_id": 64, "rating":5, "date": "5/05/04", "review_text": "next keep i'm a i the switch to outside think homer fighting four and unit this don't i kids grunting" },
    { "user_id": 88, "rating":3, "date": "9/03/00", "review_text": "i like you i overy whatever but times you one cardioverter to i difference of me you get black look" },
    { "user_id": 6, "rating": 5, "date": "8/07/2023", "review_text": "sued so crowd yes be him whistle this for of cover a dial innocent enjoy naked invented don't the recipe" },
    { "user_id": 84, "rating": 5, "date": "06/05/2023", "review_text": "on education better i itchy people here me potatoes just choking is for school would fair bases paid you who" },
    { "user_id": 84, "rating": 4, "date": "4/05/2023", "review_text": "shh find bring guess that travel how where hear great chorus i be hug better ever get one the girl" },
    { "user_id": 08, "rating":3, "date": "0/04/2023", "review_text": "let in the look you're not even oh it is kid a any know of the a thick air old" },
    { "user_id": 96, "rating":3, "date": "8/05/04", "review_text": "a who so this school to be hands year isn't stringency may hesitantly a nothing naked happens a out cool" },
    { "user_id": 40, "rating":3, "date": "0/03/00", "review_text": "talk she name ha mom it kapur for catching source touch of festival with i showing the think twelve kapur" },
    { "user_id": 40, "rating":3, "date": "7/03/04", "review_text": "zoo medicine boy he off tell cardioverter and i on simpsons her i off be show to you an going" },
    { "user_id": 84, "rating": 5, "date": "0/07/00", "review_text": "it animals boy can i cardioverter stringency for ah who's and the had into you us although an and forever" },
    { "user_id": 90, "rating": 4, "date": "12/05/2023", "review_text": "me you leaving you have died ah of oh the overy what's that continues i your feel anytime there not" },
    { "user_id": 87, "rating":3, "date": "7/03/04", "review_text": "now sorry the chop do ribs still got my technical who aw but of longer here day day simpson kidding" },
    { "user_id": 65, "rating":3, "date": "05/09/04", "review_text": "some daddy there's think for of little i you'll monitor bowl overy i card so a won lisa is feel" },
    { "user_id": 84, "rating":3, "date": "0/03/00", "review_text": "this this pray me knife are realize heart hey oh music here apart more uh in don't and applause right" },
    { "user_id": 8, "rating": 4, "date": "6/05/2023", "review_text": "a this for on you're stringency and be presentation being awake with back movie her be can yep to into" },
    { "user_id": 0, "rating": 4, "date": "04/05/2023", "review_text": "stop liberty it out thing would guest light gonna in but helps again a to would knife great in excellent" },
    { "user_id": 08, "rating":3, "date": "12/09/00", "review_text": "for a taco don't fan while crap family parent of back more but are him project wife we'll just a" },
    { "user_id": 65, "rating": 4, "date": "4/03/2023", "review_text": "me this the of is he had have fight he's as our season here nothing my ya kirk e the" },
    { "user_id": 5, "rating":3, "date": "12/03/2023", "review_text": "those can't dream picking news sighs i for then eh a dad just of ew i what's start my with" },
    { "user_id": 4, "rating": 4, "date": "05/03/2023", "review_text": "the overy can got talk with too kids life you crowd you call move me my that you're need maybe" },
    { "user_id": 49, "rating": 4, "date": "5/05/04", "review_text": "i forget always you this kidney been 'bout strange overy living mother the i member all win gave go easy" },
    { "user_id": 50, "rating":3, "date": "8/06/04", "review_text": "kent gotta and the this somebody only it an like the simpson i way me the or give i'm join" },
    { "user_id": 06, "rating":3, "date": "08/08/00", "review_text": "me italian a watch list everybody merry not size ho bart on all dad here's we it's cardioverter shirt oil" },
    { "user_id": 66, "rating":3, "date": "5/09/2023", "review_text": "trip him little too this i my a little beer right guys gonna good can't just jesus the i'm this" },
    { "user_id": 46, "rating":3, "date": "6/05/00", "review_text": "always a gumble in not see me good well of me i one we've four times unless this meet in" },
    { "user_id": 64, "rating": 4, "date": "04/08/2023", "review_text": "think sued of booze to i stupid right oh homer no serious dad you are lord can i home he" },
    { "user_id": 64, "rating": 4, "date": "5/08/2023", "review_text": "i no very it before was oh just she's from think he can name stinks stringency with the to has" },
    { "user_id": 7, "rating": 4, "date": "9/08/2023", "review_text": "not shirts up kapur project bart loudly time i what from your you hot muttering liberty come stringency about the" },
    { "user_id": 90, "rating": 4, "date": "12/03/04", "review_text": "be mr cardioverter a maybe on sensitive can and husband do with can something me handle know if it i" },
    { "user_id": 77, "rating":3, "date": "8/05/00", "review_text": "if giving well family your ever not go night someone that game a a ooh with well raise excuse from" },
    { "user_id": 5, "rating":3, "date": "7/09/04", "review_text": "this those that technology while ever call dogs the need to wasted die oh all or we're i'll you so" },
    { "user_id": 86, "rating":3, "date": "5/06/00", "review_text": "son need for of oh has i've nah romance and do got confess the you no neddy in grizzlies well" },
    { "user_id": 4, "rating": 4, "date": "0/07/2023", "review_text": "turn i listening this get because hmm the no let's head i'm even apart are anything me listen honor come" },
    { "user_id": 4, "rating": 4, "date": "5/05/2023", "review_text": "i'm bad mr story you come house lou i the on savings a buy hair i this in lemonade tell" },
    { "user_id": 45, "rating": 4, "date": "04/03/2023", "review_text": "burns could god think olympics nothing the in plenty chief how you're you you house homer of do it actually" },
    { "user_id": 80, "rating":3, "date": "12/05/2023", "review_text": "bart bright now evening love is of little all could all over the you'll damn everyone talk the is hi" },
    { "user_id": 49, "rating": 4, "date": "0/03/00", "review_text": "of groaning right glue say little tell overy if i could've the out you d'oh hot lunch isn't this just" },
    { "user_id": 99, "rating": 4, "date": "12/07/2023", "review_text": "asking i don't no society must to a captain me homie office it could on of you lead the it" },
    { "user_id": 77, "rating": 4, "date": "9/08/2023", "review_text": "about i'm the cardioverter on forever love put for you cutting is pal guess us overy to you hesitantly pies" },
    { "user_id": 85, "rating":3, "date": "12/03/00", "review_text": "field sober worse their homer twice only my building find sort hello can't buy this of say tree of love" },
    { "user_id": 22, "rating":3, "date": "0/07/04", "review_text": "right hello do window the thing voted i sometimes want chattering will please has of explosion out could so sorry" },
    { "user_id": 80, "rating":3, "date": "8/04/00", "review_text": "is humiliations that be head alaska less school was some cool but on family cardioverter beeps i'll show and it's" },
    { "user_id": 84, "rating": 4, "date": "5/03/00", "review_text": "a ice now have he duty yeah maggie all crap rock at to i'm about that's i'd have if off" },
    { "user_id": 84, "rating": 4, "date": "9/07/00", "review_text": "can what it you're out you don't problems get too too i here husband stringency got to some on you're" },
    { "user_id": 5, "rating": 4, "date": "0/09/04", "review_text": "bart but don't stringency i i'm you you we'll you come can't someone today have animals so and boy i'll" },
    { "user_id": 06, "rating":3, "date": "0/06/00", "review_text": "of medlin this that me and cost yeah and class write the sure blown first and can't that wasn't my" },
    { "user_id": 87, "rating":3, "date": "12/05/00", "review_text": "people your you job you overy the there a be just take the come is there's in the your please" },
    { "user_id": 04, "rating":3, "date": "9/04/04", "review_text": "did the monkey what gasping you you not as on you on husbands he's you broken professor of lady they" },
    { "user_id": 76, "rating": 4, "date": "0/05/2023", "review_text": "poor major we love have aah think place promise am hello this if blows to agent in that's ancient school" },
    { "user_id": 44, "rating": 4, "date": "05/05/00", "review_text": "from to uh overy i think was mystery gives the a might the was sniffles old to to who's aw" },
    { "user_id": 6, "rating":3, "date": "5/06/00", "review_text": "at you the are three do it legal a but oh a a what a than the pop know you" },

]

const searchInput = document.querySelector("#search");
const searchSpinner = document.querySelector("#search-spinner");
const panelReviews = document.querySelector("#panel-reviews");
const panelRating = document.querySelector("#panel-rating");
//const panelAddReview = document.querySelector("#panel-add");
const tplReview = document.querySelector("#tpl-review");
const listBars = document.querySelector("#list-bars");
const tplBar = document.querySelector("#tpl-bar");
const btnResetSearch = document.querySelector("#btn-reset");
const btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", () => { 
   // panelAddReview
    alert("Sorry, that would be just too much for today.");
})

const MIN_CHARS = 3;
const totalReviews = REVIEWS.length;

document.querySelector("#reviews-total").innerText = totalReviews;

let rating = [];
let totalScore = 0;
for (let i = 0; i < 5; i++) { 
    rating[i] = REVIEWS.filter(x => x.rating === i + 1).length
    totalScore = totalScore + (rating[i] * (i + 1));
}
rating.reverse();


let delay = 1500;
let count = 5;
rating.forEach((bar, idx) => { 
    const item = tplBar.content.cloneNode(true);
    item.querySelector("[bar-rating]").innerHTML = showStars(count);
    item.querySelector("[bar-total]").innerText = idx + bar;
    const percent = percentage(bar, totalReviews)
    const prog = item.querySelector("[bar-progress]")
    prog.dataset.percent = `${percent}%`;
    prog.classList.add(`w-[1%]`)
    setTimeout(() => {
        prog.classList.add(`w-[${percent}%]`)
    }, delay);
    delay = delay + 500;
    listBars.append(item);
    count--;
})

function percentage(val, total) {
    return Math.floor((100 * val) / total);
}

function showStars(n) {
    let stars = '';
    for (let i = 1; i <= n; i++) { 
        stars += `<span class="star material-symbols-outlined star-fill w-2">star</span>`
    }
    return stars;
}


// average rating
const avg = totalScore / totalReviews;
document.querySelector("[rating-avg]").innerText = avg.toFixed(1) ;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// debounce to prevent calling the apis if the user is still typing
function debounce(func, delay = 1000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const sendDebounce = debounce((term) => {
    searchBeviews(term);
}, 500);


searchInput.addEventListener("keyup", (e) => {
    const term = e.target.value;;

    //if (term.length > MIN_CHARS) {
        // start searching
        sendDebounce(term);
    //}
})

btnResetSearch.addEventListener("click", () => { 
    searchInput.value = '';
    revealReviews(false) 
})

function searchBeviews(term) {
    let results = [];
    if (term){
        panelReviews.innerHTML = '';
        // find reviews with tetm
        results = REVIEWS.filter(x => x.review_text.includes(term));
    
        if (results) { 
            results.forEach(review => { 
              //  console.log(review);
                //let txt = review.review_text;
                let txt = review.review_text.replace(`${term}`, `<span class="bg-yellow-500 text-black">${term}</span>`);


                const user = findUser(review.user_id);
                const item = tplReview.content.cloneNode(true);
                item.querySelector("[review-name]").innerText = user.name
                item.querySelector("time").innerText = review.date
                item.querySelector("p").innerHTML = txt
                item.querySelector("[review-rating]").innerHTML = showStars(review.rating);

                item.querySelector("img").src = `https://i.pravatar.cc/80?img=${getRndInteger(1,70)}`;
                panelReviews.append(item);
            })
        }
    }

    if (results.length) {
        revealReviews(true) 
    } else { 
        revealReviews(false) 
    }
}
function revealReviews(open) {
    if (open) {
        panelReviews.classList.remove("-translate-y-[1000px]");
        panelRating.classList.add("translate-y-[1000px]");
        //panelReviews.scrollIntoView({ behavior: "smooth", inline: "start" });
    } else {
        panelReviews.classList.add("-translate-y-[1000px]");
        panelRating.classList.remove("translate-y-[1000px]");
        //panelRating.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
}
function findUser(id) { 
    if (id > 200) { 
        console.log(id);
        id = 23;
    }
    return USERS.find(x => x.user_id === id);
    
}

