// pick up video at 23:40
let protoWordsArray = [
  { 
    cat: "Actors",
    sel: false,
    items: ["EMIL JANNINGS", "WARNER BAXTER", "GEORGE ARLISS", "LIONEL BARRYMORE", "WALLACE BEERY", "FREDERIC MARCH", "CHARLES LAUGHTON", "CLARK GABLE", "VICTOR MCLAGLEN", "PAUL MUNI", "SPENCER TRACY", "ROBERT DONAT", "JAMES STEWART", "GARY COOPER", "JAMES CAGNEY", "PAUL LUKAS", "BING CROSBY", "RAY MILLAND", "RONALD COLEMAN", "LAURENCE OLIVIER", "BRODERICK CRAWFORD", "JOSE FERRER", "HUMPHREY BOGART", "GARY COOPER", "WILLIAM HOLDEN", "MARLON BRANDO", "ERNEST BORGNINE", "YUL BRYNNER", "ALEC GUINNESS", "DAVID NIVEN", "CHARLTON HESTON", "BURT LANCASTER", "MAXIMILLIAN SCHELL", "GREGORY PECK", "SIDNEY POITIER", "REX HARRISON", "LEE MARVIN", "PAUL SCOFIELD", "ROD STEIGER", "CLIFF ROBERTSON", "JOHN WAYNE", "GEORGE C SCOTT", "GENE HACKMAN", "JACK LEMMON", "ART CARNEY", "JACK NICHOLSON", "PETER FINCH", "RICHARD DREYFUSS", "JON VOIGHT", "DUSTIN HOFFMAN", "ROBERT DE NERO", "HENRY FONDA", "BEN KINGSLEY", "ROBERT DUVALL", "F MURRAY ABRAHAM", "WILLIAM HURT", "PAUL NEWMAN", "MICHAEL DOUGLAS", "DANIEL DAY LEWIS", "JEREMY IRONS", "ANTHONY HOPKINS", "AL PACINO", "TOM HANKS", "NICOLAS CAGE", "GEOFFREY RUSH", "ROBERTO BENIGNI", "KEVIN SPACEY", "RUSSELL CROWE", "DENZEL WASHINGTON", "ADRIEN BRODY", "SEAN PENN", "JAMIE FOXX", "PHILIP SEYMOUR HOFFMAN", "FOREST WHITAKER", "JEFF BRIDGES", "COLIN FIRTH", "JEAN DUJARDIN", "MATTHEW MCCONAUGHEY", "EDDIE REDMAYNE", "LEONARDO DICAPRIO", "CASEY AFFLECK", "GARY OLDMAN", "RAMI MALEK", "JOAQUIN PHOENIX", "ANTHONY HOPKINS", "WILL SMITH", "FRANCHOT TONE", "THOMAS MITCHELL", "CLAUDE RAINS", "PAUL HENRIED", "ERROL FLYNN", "CARY GRANT", "LEO G CARROLL", "JAMES MASON", "LOUIS HAYWARD", "HENRY DANIELL", "ROBERT TAYLOR", "WALTER HUSTON", "JOHN HUSTON", "RANDOLPH SCOTT", "WALTER BRENNAN", "WILLIAM POWELL", "VAN JOHNSON", "CHARLIE CHAPLIN", "LESLIE HOWARD", "RALPH BELLAMY", "RAYMOND MASSEY", "C AUBREY SMITH", "DOUGLAS FAIRBANKS JR", "FRED ASTAIRE", "BASIL RATHBONE", "TYRONE POWER", "DON AMECHE", "MICHAEL REDGRAVE", "BRIAN DONLEVY", "RALPH RICHARDSON", "EDWARD ARNOLD", "MELVYN DOUGLAS", "BELA LUGOSI", "BORIS KARLOFF", "CECIL KELLAWAY", "WARD BOND", "JOEL MCCREA", "ROBERT YOUNG", "VAN HEFLIN", "FRANK MORGAN", "CONRAD VEIDT", "WALTER PIDGEON", "RODDY MCDOWALL", "DONALD CRISP", "PETER LORRE", "SYDNEY GREENSTREET", "WARD BOND", "ELISH COOK JR", "ROBERT MORLY", "REX HARRISON", "EDWARD G ROBINSON", "CEDRIC HARDWICKE", "NIGEL BRUCE", "KENT SMITH", "TOM CONWAY", "GEORGE SANDERS", "JOSEPH COTTEN", "ROBERT CUMMINGS", "OTTO KRUGER", "ALAN LADD", "JACK BENNY", "FRED MACMURRAY", "CHARLES BOYER", "BARRY FITZGERALD", "DANA ANDREWS", "CLIFTON WEBB", "VINCENT PRICE", "JOHN HODIAK", "WALTER SLEZAK", "WILLIAM BENDIX", "DICK POWELL", "MIKE MAZURKI", "MICKEY ROONEY", "GENE KELLY", "FRANK SINATRA", "CORNEL WILDE", "EDMOND OBRIEN", "JACK PALANCE", "ZERO MOSTEL", "RICHARD WIDMARK", "TOSHIRO MIFUNE", "ALASTAIR SIM", "MONTGOMERY CLIFT", "TREVOR HOWARD", "ROBERT RYAN", "EDMUND GWENN", "ROBERT MITCHUM", "DANNY KAYE", "GLENN FORD", "JOHN GARFIELD"]
    },
  { 
    cat: "Actresses",
    sel: false,
    items: ["JANET GAYNOR", "MARY PICKFORD", "NORMA SHEARER", "MARIE DRESSLER", "HELEN HAYES", "KATHARINE HEPBURN", "CLAUDETTE COLBERT", "BETTE DAVIS", "LUISE RAINER", "VIVIEN LEIGH", "GINGER ROGERS", "JOAN FONTAINE", "GREER GARSON", "JENNIFER JONES", "INGRID BERGMAN", "JOAN CRAWFORD", "OLIVIA DE HAVILLAND", "LORETTA YOUNG", "JANE WYMAN", "JUDY HOLLIDAY", "SHIRLEY BOOTH", "AUDREY HEPBURN", "GRACE KELLY", "ANNA MAGNANI", "JOANNE WOODWARD", "SUSAN HAYWARD", "SIMONE SIGNORET", "ELIZABETH TAYLOR", "SOPHIA LOREN", "ANNE BANCROFT", "PATRICIA NEAL", "JULIE ANDREWS", "JULIE CHRISTIE", "BARBRA STREISAND", "MAGGIE SMITH", "GLENDA JACKSON", "JANE FONDA", "LIZA MINNELLI", "ELLEN BURSTYN", "LOUISE FLETCHER", "FAYE DUNAWAY", "DIANE KEATON", "SALLY FIELD", "SISSY SPACEK", "MERYL STREEP", "SHIRLEY MACLAINE", "GERALDINE PAGE", "MARLEE MATLIN", "CHER", "JODIE FOSTER", "JESSICA TANDY", "KATHY BATES", "EMMA THOMPSON", "HOLLY HUNTER", "JESSICA LANGE", "SUSAN SARANDON", "FRANCES MCDORMAND", "HELEN HUNT", "GWYNETH PALTROW", "HILARY SWANK", "JULIA ROBERTS", "HALLE BERRY", "NICOLE KIDMAN", "CHARLIZE THERON", "REESE WITHERSPOON", "HELEN MIRREN", "MARION COTILLARD", "KATE WINSLET", "SANDRA BULLOCK", "NATALIE PORTMAN", "JENNIFER LAWRENCE", "CATE BLANCHETT", "JULIANNE MOORE", "BRIE LARSON", "EMMA STONE", "OLIVIA COLMAN", "RENEE ZELLWEGER", "JESSICA CHASTAIN", "BARBARA BAIN", "GALE SONDERGAARD", "GRETA GARBO", "MARY ASTOR", "MADELEINE CARROLL", "MYRNA LOY", "ESTHER WILLIAMS", "LUCILLE BALL", "JEAN ARTHUR", "IRENE DUNNE", "BARBARA STANWYCK", "CONSTANCE BENNETT", "DAME MAY WHITTY", "MARGARET LOCKWOOD", "WENDY HILLER", "MARLENE DIETRICH", "EDNA MAY OLIVER", "HATTIE MCDANIEL", "MAUREEN OHARA", "CLAIRE TREVOR", "JUDY GARLAND", "MERLE OBERON", "FLORA ROBSON", "LARAINE DAY", "LINDA DARNELL", "MARGARET SULLAVAN", "JUDITH ANDERSON", "JUNE DUPREZ", "IDA LUPINO", "TERESA WRIGHT", "VERONICA LAKE", "CAROLE LOMBARD", "ELSA LANCHESTER", "AGNES MOOREHEAD", "GERALDIN FITZGERALD", "PRISCILLA LANE", "GENE TIERNEY", "TALLULAH BANKHEAD", "LAUREN BACALL", "ANNE BAXTER", "GLORIA SWANSON", "JOAN BENNETT", "SHIRLEY TEMPLE", "VIRGINIA MAYO", "JEAN SIMMONS", "RITA HAYWORTH", "DEBORAH KERR", "SIGNE HASSO", "NATALIE WOOD", "LANA TURNER"]
    },
    {
    cat: "Beatles Songs",
    sel: false,
    items: ["I SAW HER STANDING THERE", "MISERY", "LOVE ME DO", "PS I LOVE YOU", "DO YOU WANT TO KNOW A SECRET", "A TASTE OF HONEY", "TWIST AND SHOUT", "I WANT TO HOLD YOUR HAND", "THIS BOY", "IT WONT BE LONG", "ALL IVE GOT TO DO", "ALL MY LOVING", "DONT BOTHER ME", "LITTLE CHILD", "TIL THERE WAS YOU", "HOLD ME TIGHT", "I WANNA BE YOUR MAN", "NOT A SECOND TIME", "THANK YOU GIRL", "YOU REALLY GOT A HOLD ON ME", "MONEY", "YOU CANT DO THAT", "LONG TALL SALLY", "I CALL YOUR NAME", "PLEASE MR POSTMAN", "ILL GET YOU", "SHE LOVES YOU", "A HARD DAYS NIGHT", "TELL ME WHY", "ILL CRY INSTEAD", "I SHOULD HAVE KNOWN BETTER", "AND I LOVE HER", "IF I FELL", "CANT BUY ME LOVE", "THINGS WE SAID TODAY", "ANY TIME AT ALL", "MATCHBOX", "SLOW DOWN", "TELL ME WHY", "NO REPLY", "IM A LOSER", "BABYS IN BLACK", "ROCK AND ROLL MUSIC", "ILL FOLLOW THE SUN", "MR MOONLIGHT", "HONEY DONT", "ILL BE BACK", "SHES A WOMAN", "I FEEL FINE", "PLEASE PLEASE ME", "EIGHT DAYS A WEEK", "WORDS OF LOVE", "YES IT IS", "DIZZY MISS LIZZY", "HELP", "I NEED YOU", "ANOTHER GIRL", "TICKET TO RIDE", "YOURE GOING TO LOSE THAT GIRL", "IVE JUST SEEN A FACE", "NORWEGIAN WOOD", "THINK FOR YOURSELF", "MICHELLE", "GIRL", "IN MY LIFE", "WAIT", "DRIVE MY CAR", "NOWHERE MAN", "YESTERDAY", "ACT NATURALLY", "WE CAN WORK IT OUT", "DAY TRIPPER", "ELEANOR RIGBY", "YELLOW SUBMARINE", "GOOD DAY SUNSHINE", "SHES LEAVING HOME", "WHEN IM SIXTY FOUR", "LOVELY RITA", "A DAY IN THE LIFE", "MAGICAL MYSTERY TOUR", "THE FOOL ON THE HILL", "BLUE JAY WAY", "I AM THE WALRUS", "HELLO GOODBYE", "STRAWBERRY FIELDS FOREVER", "PENNY LANE", "BABY YOURE A RICH MAN", "ALL YOU NEED IS LOVE", "BACK IN THE USSR", "OB LA DI OB LA DA", "BLACKBIRD", "ROCKY RACCOON", "DONT PASS ME BY", "JULIA", "YELLOW SUBMARINE", "ALL TOGETHER NOW", "COME TOGETHER", "SOMETHING", "HERE COMES THE SUN", "REVOLUTION", "HEY JUDE", "ACROSS THE UNIVERSE", "LET IT BE"]
    },  
    { 
      cat: "Countries",
      sel: false,
      items: ["AFGHANISTAN", "ALBANIA", "ALGERIA", "ANDORRA", "ANGOLA", "ARGENTINA", "ARMENIA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS", "BELARUS", "BELGIUM", "BELIZE", "BENIN", "BHUTAN", "BOLIVIA", "BOSNIA AND HERZEGOVINA", "BOTSWANA", "BRAZIL", "BRUNEI", "BULGARIA", "BURKINA FASO", "BURUNDI", "CAMBODIA", "CAMEROON", "CANADA", "CENTRAL AFRICAN REPUBLIC", "CHAD", "CHILE", "CHINA", "COLUMBIA", "CONGO REPUBLIC OF THE", "COSTA RICA", "COTE DIVOIRE", "CROATIA", "CUBA", "CYPRUS", "CZECH REPUBLIC", "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICAN REPUBLIC", "ECUADOR", "EGYPT", "EL SALVADOR", "EQUATORIAL GUINEA", "ERITREA", "ESTONIA", "ETHIOPIA", "FIJI", "FINLAND", "FRANCE", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GREECE", "GRENADA", "GUATEMALA", "GUYANA", "HAITI", "HONDURAS", "HUNGARY", "ICELAND", "INDONESIA", "INDIA", "IRAN", "IRAQ", "IRELAND", "ISRAEL", "ITALY", "JAMAICA", "JAPAN", "JORDAN","KAZAKHSTAN", "KENYA", "KOSOVO", "KUWAIT", "KYRGYZSTAN", "LAOS", "LATVIA", "LEBANON", "LESOTHO", "LIBERIA", "LIBYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MADAGASCAR", "MALAWI", "MALAYSIA", "MALDIVES", "MALI", "MALTA", "MARSHALL ISLANDS", "MAURITANIA", "MAURITIUS", "MEXICO", "MICRONESIA", "MOLDOVA", "MONACO", "MONTENEGRO", "MOROCCO", "MOZAMBIQUE", "MYANMAR", "NAMIBIA", "NEPAL", "NETHERLANDS", "NEW ZEALAND", "NICARAGUA", "NIGER", "NIGERIA", "NORTH KOREA", "NORTH MACEDONIA", "NORWAY", "OMAN", "PAKISTAN", "PALESTINE","PANAMA", "PAPUA NEW GUINEA", "PARAGUAY", "PERU", "PHILIPPINES", "POLAND", "PORTUGAL", "QATAR", "ROMANIA", "RUSSIA", "RWANDA", "SAINT KITTS AND NEVIS", "SAINT LUCIA", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SAN MARINO", "SAUDI ARABIA", "SENEGAL", "SERBIA", "SEYCHELLES", "SIERRA LEONE", "SINGAPORE", "SLOVAKIA", "SLOVENIA", "SOLOMON ISLANDS", "SOMALIA", "SOUTH AFRICA", "SOUTH KOREA", "SOUTH SUDAN", "SPAIN", "SRI LANKA", "SUDAN", "SURINAME", "SWEDEN", "SWITZERLAND", "SYRIA", "TAIWAN", "TAJIKISTAN", "TANZANIA", "THAILAND", "TOGO", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY", "TURKMENISTAN", "TUVALU", "UGANDA","UKRAINE", "UNITED ARAB EMIRATES", "UNITED KINGDON", "UNITED STATES OF AMERICA", "URUGUAY", "UZBEKISTAN", "VATICAN CITY", "VENEZUELA", "VIETNAM", "YEMEN", "ZAMBIA", "ZIMBABWE"] 
    }, 
    { 
    cat: "Geo Features",
    sel: false,
    items: ["THE AMAZON", "THE NILE", "THE HUDSON", "THE SAHARA", "MT EVEREST", "THE GREAT SALT LAKE", "HIGH POINT", "THE ATLANTIC OCEAN", "THE PACIFIC OCEAN", "THE INDIAN OCEAN", "NORTH AMERICA", "EUROPE", "ASIA", "SOUTH AMERICA", "AFRICA", "MT WASHINGTON", "THE GOBI DESERT", "PIKES PEAK", "CRATER LAKE", "MT SAINT HELENS", "MT FUJI", "MT KILIMANJARO", "MT KENYA", "ACONGAGUA", "AMAZON RAIN FOREST", "DENALI", "MONT BLANC", "THE MATTERHORN", "THE JUNGFRAU", "THE EIGER", "THE THAMES", "THE SEINE", "THE DANUBE", "THE DNEIPER", "THE VOLGA","THE RIO GRANDE", "THE MISSISSIPPI", "THE MISSOURI", "ANTARCTICA", "THE GREAT BARRIER REEF", "NIAGARA FALLS", "ANGEL FALLS", "EL CAPITAN", "HALF DOME", "DEVILS TOWER", "MT RUSHMORE", "CATSKILLS", "ADIRONDACKS", "ROCKIES", "HIMALAYAS", "ANDES", "ALPS", "CARPATHIANS", "ATLAS", "AYERS ROCK", "EVERGLADES", "GREAT SMOKEY MOUNTAINS"]
    },  
  { 
    cat: "Hits of the 60's",
    sel: false,
    items: ["EL PASO", "RUNNING BEAR", "TEEN ANGEL", "THEME FROM A SUMMER PLACE", "CATHYS CLOWN", "ITS NOW OR NEVER", "THE TWIST", "SAVE THE LAST DANCE FOR ME", "GEORGIA ON MY MIND", "STAY", "ARE YOU LONESOME TONIGHT", "WILL YOU LOVE ME TOMORROW", "BLUE MOON", "RUNAWAY", "MOTHER IN LAW", "TRAVELIN MAN", "TOSSIN AND TURNIN", "MICHAEL", "TAKE GOOD CARE OF MY BABY", "HIT THE ROAD JACK", "RUNAROUND SUE", "BIG BAD JOHN", "PLEASE MR POSTMAN", "THE LION SLEEPS TONIGHT", "DUKE OF EARL", "JOHNNY ANGEL", "SOLDIER BOY", "I CANT STOP LOVING YOU", "ROSES ARE RED", "BREAKING UP IS HARD TO DO", "THE LOCO MOTION", "SHERRY", "MONSTER MASH", "HES A REBEL", "BIG GIRLS DONT CRY", "GO AWAY LITTLE GIRL", "WALK RIGHT IN", "HEY PAULA", "WALK LIKE A MAN", "OUR DAY WILL COME", "HES SO FINE", "I WILL FOLLOW HIM", "ITS MY PARTY", "EASIER SAID THAN DONE", "SURF CITY", "MY BOYFRIENDS BACK", "BLUE VELVET", "DOMINIQUE", "I WANT TO HOLD YOUR HAND", "SHE LOVES YOU", "CANT BUY ME LOVE", "HELLO DOLLY", "MY GUY", "LOVE ME DO", "CHAPEL OF LOVE", "A WORLD WITHOUT LOVE", "I GET AROUND", "RAG DOLL", "A HARD DAYS NIGHT", "EVERYBODY LOVES SOMEBODY", "WHERE DID OUR LOVE GO", "THE HOUSE OF THE RISING SUN", "OH PRETTY WOMAN", "DO WAH DIDDY DIDDY", "BABY LOVE", "LEADER OF THE PACK", "RINGO", "MR LONELY", "COME SEE ABOUT ME", "I FEEL FINE", "DOWNTOWN", "YOUVE LOST THAT LOVIN FEELING", "THIS DIAMOND RING", "MY GIRL", "EIGHT DAYS A WEEK", "STOP IN THE NAME OF LOVE", "IM TELLING YOU NOW", "MRS BROWN YOUVE GOT A LOVELY DAUGHTER", "TICKET TO RIDE",
      "HELP ME RHONDA", "BACK IN MY ARMS AGAIN", "I CANT HELP MYSELF", "MR TAMBOURINE MAN", "SATISFACTION", "IM HENRY VIII I AM", "I GOT YOU BABE", "HELP", "EVE OF DESTRUCTION", "HANG ON SLOOPY", "YESTERDAY", "GET OFF MY CLOUD", "I HEAR A SYMPHONY", "TURN TURN TURN", "OVER AND OVER", "THE SOUND OF SILENCE", "WE CAN WORK IT OUT", "MY LOVE", "LIGHTNIN STRIKES", "THESE BOOTS ARE MADE FOR WALKIN", "THE BALLAD OF THE GREEN BERETS", "SOUL AND INSPIRATION", "GOOD LOVIN", "MONDAY MONDAY", "WHEN A MAN LOVES A WOMAN", "PAINT IT BLACK", "PAPERBACK WRITER", "STRANGERS IN THE NIGHT", "HANKY PANKY", "WILD THING", "SUMMER IN THE CITY", "SUNSHINE SUPERMAN", "YOU CANT HURRY LOVE", "CHERISH", "REACH OUT ILL BE THERE", "LAST TRAIN TO CLARKSVILLE", "YOU KEEP ME HANGIN ON", "WINCHESTER CATHEDRAL", "GOOD VIBRATIONS", "IM A BELIEVER", "KIND OF A DRAG", "PENNY LANE", "HAPPY TOGETHER", "SOMETHIN STUPID", "THE HAPPENING", "GROOVIN", "RESPECT", "WINDY", "LIGHT MY FIRE", "ALL YOU NEED IS LOVE", "ODE TO BILLIE JOE", "THE LETTER", "TO SIR WITH LOVE", "INCENSE AND PEPPERMINTS", "DAYDREAM BELIEVER", "HELLO GOODBYE", "JUDY IN DISGUISE", "GREEN TAMBOURINE", "LOVE IS BLUE", "THE DOCK OF THE BAY", "HONEY", "TIGHTEN UP", "MRS ROBINSON", "THIS GUYS IN LOVE WITH YOU", "GRAZING IN THE GRASS", "HELLO I LOVE YOU", "PEOPLE GOT TO BE FREE", "HARPER VALLEY PTA", "HEY JUDE", "LOVE CHILD", "I HEARD IT THROUGH THE GRAPEVINE", "CRIMSON AND CLOVER", "EVERYDAY PEOPLE", "DIZZY", "AQUARIUS", "GET BACK", "HONKY TONK WOMEN", "SUGAR SUGAR", "I CANT GET NEXT TO YOU", "SUSPICIOUS MINDS", "COME TOGETHER", "LEAVING ON A JET PLANE", "SOMEDAY WELL BE TOGETHER"]
    },  
    { 
      cat: "Hits of the 70's",
      sel: false,
      items: ["VENUS", "BRIDGE OVER TROUBLED WATER", "LET IT BE", "AMERICAN WOMAN", "EVERYTHING IS BEAUTIFUL", "THE LONG AND WINDING ROAD", "MAMA TOLD ME", "CLOSE TO YOU", "MAKE IT WITH YOU", "AINT NO MOUNTAIN HIGH ENOUGH", "CRACKLIN ROSIE", "I THINK I LOVE YOU", "THE TEARS OF A CLOWN", "MY SWEET LORD", "KNOCK THREE TIMES", "ME AND BOBBY MCGEE", "JUST MY IMAGINATION", "JOY TO THE WORLD", "BROWN SUGAR", "ITS TOO LATE", "INDIAN RESERVATIOIN", "YOUVE GOT A FRIEND", "HOW CAN YOU MEND A BROKEN HEART", "UNCLE ALBERT ADMIRAL HALSEY", "MAGGIE MAY", "GYPSYS TRAMPS AND THIEVES", "THEME FROM SHAFT", "FAMILY AFFAIR", "BRAND NEW KEY", "AMERICAN PIE", "HEART OF GOLD", "A HORSE WITH NO NAME", "CANDY MAN", "BRANDY", "BABY DONT GET HOOKED ON ME","I CAN SEE CLEARLY NOW", "PAPA WAS A ROLLIN STONE", "I AM WOMAN", "YOURE SO VAIN", "SUPERSTITION", "CROCODILE ROCK", "KILLING ME SOFTLY", "LOVE TRAIN", "TIE A YELLOW RIBBON", "YOU ARE THE SUNSHINE OF MY LIFE", "MY LOVE", "BAD BAD LEROY BROWN", "THE MORNING AFTER", "TOUCH ME IN THE MORNING", "DELTA DAWN", "WERE AN AMERICAN BAND", "HALF BREED", "ANGIE", "MIDNIGHT TRAIN TO GEORGIA", "TOP OF THE WORLD", "THE MOST BEAUTIFUL GIRL", "TIME IN A BOTTLE", "YOURE SIXTEEN", "SEASONS IN THE SUN", "SUNSHINE ON MY SHOULDERS", "HOOKED ON A FEELING", "BENNIE AND THE JETS", "THE LOCO MOTION", "BILLY DONT BE A HERO", "SUNDOWN", "ROCK THE BOAT", "ANNIES SONG", "THE NIGHT CHICAGO DIED", "I SHOT THE SHERIFF", "ROCK ME GENTLY", "I HONESTLY LOVE YOU", "NOTHING FROM NOTHING", "YOU AINT SEEN NOTHING YET", "KUNG FU FIGHTING", "CATS IN THE CRADLE", "LUCY IN THE SKY WITH DIAMONDS", "MANDY", "PLEASE MR POSTMAN", "HAVE YOU NEVER BEEN MELLOW", "THANK GOD IM A COUNTRY BOY", "SISTER GOLDEN HAIR", "LOVE WILL KEEP US TOGETHER", "LISTEN TO WHAT THE MAN SAID", "JIVE TALKIN", "GET DOWN TONIGHT", "RHINESTONE COWBOY", "SATURDAY NIGHT", "I WRITE THE SONGS", "WELCOME BACK", "AFTERNOON DELIGHT", "DONT GO BREAING MY HEART", "PLAY THAT FUNKY MUSIC", "TONIGHTS THE NIGHT", "DANCING QUEEN", "HOTEL CALIFORNIA", "YOU LIGHT UP MY LIFE", "HOW DEEP IS YOUR LOVE", "STAYIN ALIVE", "WITH A LITTLE LUCK", "THREE TIMES A LADY", "YOU DONT BRING ME FLOWERS", "TOO MUCH HEAVEN", "DA YA THINK IM SEXY", "I WILL SURVIVE", "WHAT A FOOL BELIEVES", "HEART OF GLASS", "REUNITED", "MY SHARONA", "THE PINA COLADA SONG", "BOHEMIAN RHAPSODY"]
      },  
    { 
    cat: "Movies",
    sel: false,
    items: ["WINGS", "THE BROADWAY MELODY", "CIMMARON", "GRAND HOTEL",  "CAVALCADE", "IT HAPPENED ONE NIGHT", "MUTINY ON THE BOUNTY", "THE GREAT ZIEGFELD", "THE LIFE OF EMILE ZOLA", "GONE WITH THE WIND", "REBECCA", "HOW GREEN WAS VALLEY", "MRS MINIVER", "CASABLANCA", "GOING MY WAY", "THE LOST WEEKEND", "GENTLEMANS AGREEMENT", "HAMLET", "ALL THE KINGS MEN", "ALL ABOUT EVE", "AN AMERICAN IN PARIS", "THE GREATEST SHOW ON EARTH", "FROM HERE TO ETERNITY", "ON THE WATERFRONT", "MARTY", "THE BRIDGE ON THE RIVER KWAI", "GIGI", "BEN HUR", "THE APARTMENT", "WEST SIDE STORY", "LAWRENCE OF ARABIA", "TOM JONES", "MY FAIR LADY", "THE SOUND OF MUSIC", "A MAN FOR ALL SEASONS", "IN THE HEAT OF THE NIGHT", "OLIVER", "MIDNIGHT COWBOY", "PATTON", "THE FRENCH CONNECTION", "THE GODFATHER", "THE STING", "THE GODFATHER PART II", "ROCKY", "ANNIE HALL", "THE DEER HUNTER", "KRAMER VS KRAMER", "ORDINARY PEOPLE", "CHARIOTS OF FIRE", "GANDHI", "TERMS OF ENDEARMENT", "AMADEUS", "OUT OF AFRICA", "PLATOON", "THE LAST EMPEROR", "RAIN MAN", "DRIVING MISS DAISY", "DANCES WITH WOLVES", "THE SILENCE OF THE LAMBS", "UNFORGIVEN", "SCHINDLERS LIST", "FORREST GUMP", "BRAVEHEART", "THE ENGLISH PATIENT", "TITANIC", "SHAKESPEARE IN LOVE", "AMERICAN BEAUTY", "GLADIATOR", "A BEAUTIFUL MIND", "CHICAGO", "LORD OF THE RINGS", "MILLION DOLLAR BABY", "CRASH", "THE DEPARTED", "NO COUNTRY FOR OLD MEN", "SLUMDOG MILLIONAIRE", "THE HURT LOCKER", "THE KINGS SPEECH", "THE ARTIST", "ARGO", "TWELVE YEARS A SLAVE", "BIRDMAN", "SPOTLIGHT", "MOONLIGHT", "THE SHAPE OF WATER", "GREEN BOOK", "PARASITE", "NOMADLAND", "CODA", "MODERN TIMES", "THE PETRIFIED FOREST", "THE GOOD EARTH", "LOST HORIZON", "THE PRISONER OF ZENDA", "TOPPER", "THE ADVENTURES OF ROBIN HOOD", "BRINGING UP BABY", "THE LADY VANISHES", "YOU CANT TAKE IT WITH YOU", "DESTRY RIDES AGAIN", "THE FOUR FEATHERS", "GOODBYE MR CHIPS", "GUNGA DIN", "THE HUNCHBACK OF NOTRE DAME", "MR SMITH GOES TO WASHINGTON", "NINOTCHKA", "STAGECOACH", "THE WIZARD OF OZ", "WUTHERING HEIGHTS", "ABE LINCOLN IN ILLINOIS", "FANTASIA", "FOREIGN CORRESPONDENT", "THE GRAPES OF WRATH", "THE GREAT DICTATOR", "HIS GIRL FRIDAY", "THE MARK OF ZORRO", "THE PHILADELPHIA STORY", "PRIDE AND PREJUDICE", "REBECCA", "THE SEA HAWK", "THE SHOP AROUND THE CORNER", "THE THIEF OF BAGHAD", "CITIZEN KANE", "HERE COMES MR JORDAN", "HIGH SIERRA", "HOW GREEN WAS MY VALLEY", "THE MALTESE FALCON", "MEET JOHN DOE", "THE SEA WOLF", "SERGEANT YORK", "SUSPICION", "THAT HAMILTON WOMAN", "THE WOLF MAN", "CASABLANCA", "KINGS ROW", "THE MAGNIFICENT AMBERSONS", "NOW VOYAGER", "THE PRIDE OF THE YANKEES", "RANDOM HARVEST", "SABOTEUR", "TO BE OR NOT TO BE", "FOR WHOM THE BELL TOLLS", "HEAVEN CAN WAIT", "JANE EYRE", "THE OX BOW INCIDENT", "PHANTOM OF THE OPERA", "SHADOW OF A DOUBT", "THE SONG OF BERNADETTE", "WATCH ON THE RHINE", "ARSENIC AND OLD LACE", "DOUBLE INDEMNITY", "GASLIGHT", "GOING MY WAY", "HENRY V", "LAURA", "LIFEBOAT", "MEET ME IN ST LOUIS", "MURDER MY SWEET", "NATIONAL VELVET", "TO HAVE AND HAVE NOT", "AND THEN THERE WERE NONE", "THE BELLS OF ST MARYS", "THE BODY SNATCHER", "LEAVE HER TO HEAVEN", "MILDRED PIERCE", "THE PICTURE OF DORIAN GRAY", "SPELLBOUND", "A TREE GROWS IN BROOKLYN", "THE BEST YEARS OF OUR LIVES", "THE BIG SLEEP", "ITS A WONDERFUL LIFE", "MY DARLING CLEMENTINE", "NOTORIOUS", "THE POSTMAN ALWAYS RINGS TWICE", "THE SPIRAL STAIRCASE", "THE STRANGER", "THE YEARLING", "THE BACHELOR AND THE BOBBY SOXER", "THE BISHOPS WIFE", "BLACK NARCISSUS", "CROSSFIRE", "DARK PASSAGE", "A DOUBLE LIFE", "THE FARMERS DAUGHTER", "GENTLEMANS AGREEMENT", "THE GHOST AND MRS MUIR", "THE SECRET LIFE OF WALTER MITTY", "I REMEMBER MAMA", "JOHNNY BELINDA", "KEY LARGO", "THE LADY FROM SHANGHAI", "RED RIVER", "THE RED SHOES", "ROPE", "THE SNAKE PIT", "THE TREASURE OF THE SIERRA MADRE", "ALL THE KINGS MEN", "THE FOUNTAINHEAD", "THE HEIRESS", "KIND HEARTS AND CORONETS", "ON THE TOWN", "SHE WORE A YELLOW RIBBON", "THE THIRD MAN", "TWELVE OCLOCK HIGH", "WHITE HEAT", "ALL ABOUT EVE", "THE ASPHALT JUNGLE", "BORN YESTERDAY", "FATHER OF THE BRIDE", "HARVEY", "RASHOMON", "SUNSET BOULEVARD"]
    },
  { 
    cat: "Presidents",
    sel: true,
    items: ["GEORGE WASHINGTON", "JOHN ADAMS", "THOMAS JEFFERSON", "JAMES MADISON", "JAMES MONROE", "JOHN QUINCY ADAMS", "ANDREW JACKSON", "MARTIN VAN BUREN", "WILLIAM HENRY HARRISON", "JOHN TYLER", "JAMES K POLK", 
    "ZACHARY TAYLOR", "MILLARD FILLMORE", "FRANKLIN PIERCE", "JAMES BUCHANAN", "ABRAHAM LINCOLN", "ANDREW JOHNSON", "ULYSSES S GRANT", "RUTHERFORD B HAYES", "JAMES GARFIELD", "CHESTER A ARTHUR", "GROVER CLEVELAND", "BENJAMIN HARRISON", "WILLIAM MCKINLEY", "THEODORE ROOSEVELT", "WILLIAM HOWARD TAFT", "WOODROW WILSON", "WARREN G HARDING", "CALVIN COOLIDGE", "HERBERT HOOVER", "FRANKLIN D ROOSEVELT", "HARRY TRUMAN", "DWIGHT EISENHOWER", "JOHN F KENNEDY", "LYNDON JOHNSON", "RICHARD NIXON", "GERALD FORD", "JIMMY CARTER", "RONALD REAGAN", "GEORGE H W BUSH", "BILL CLINTON", "GEORGE W BUSH", "BARACK OBAMA", "DONALD TRUMP", "JOE BIDEN"]
  },
  { 
    cat: "States",
    sel: false,
    items: ["ALABAMA", "ALASKA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "FLORIDA", "GEORGIA", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA", "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARYLAND", "MASSACHUSETTS", "MICHIGAN", "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA", "NEW HAMPSHIRE", "NEW JERSEY", "NEW MEXICO", "NEW YORK", "NORTH CAROLINA", "NORTH DAKOTA", "OHIO", "OKLAHOMA", "OREGON", "PENNSYLVANIA", "RHODE ISLAND", "SOUTH CAROLINA", "SOUTH DAKOTA", "TENNESSEE", "TEXAS", "UTAH", "VERMONT", "VIRGINIA", "WASHINGTON", "WEST VIRGINIA", "WISCONSIN", "WYOMING"]
  },
  { 
    cat: "State Capitals",
    sel: false,
    items: ["MONTGOMERY", "JUNEAU", "PHOENIX", "LITTLE ROCK", "SACRAMENTO", "DENVER", "HARTFORD", "DOVER", "TALLAHASSEE", "ATLANTA", "HONOLULU", "BOISE", "SPRINGFIELD", "INDIANAPOLIS", "DES MOINES", "TOPEKA", "FRANKFORT", "BATON ROUGE", "AUGUSTA", "ANNAPOLIS", "BOSTON", "LANSING", "ST PAUL", "JACKSON", "JEFFERSON CITY", "HELENA", "LINCOLN", "CARSON CITY", "CONCORD", "TRENTON", "SANTA FE", "ALBANY", "RALEIGH", "BISMARK", "COLUMBUS", "OKLAHOMA CITY", "SALEM", "HARRISBURG", "PROVIDENCE", "COLUMBIA", "PIERRE", "NASHVILLE", "AUSTIN", "SALT LAKE CITY", "MONTPELIER", "RICHMOND", "OLYMPIA", "CHARLESTON", "MADISON", "CHEYENNE"]
    },
  { 
    cat: "U.S. Cities",
    sel: false,
    items: ["MOBILE", "ANCHORAGE", "SCOTTSDALE", "LOS ANGELES", "SAN DIEGO", "SAN FRANCISCO", "SAN JOSE", "BOULDER", "ASPEN", "VAIL", "DURANGO", "BETHLEHEM", "NEW LONDON", "NEW HAVEN", "WILMINGTON", "MIAMI", "TAMPA BAY", "ORLANDO", "AUGUSTA", "HILO", "CHICAGO", "PEORIA", "GARY", "LEXINGTON", "NEW ORLEANS", "BANGOR", "PORTLAND", "KENNEBUNKPORT", "BALTIMORE", "SPRINGFIELD", "ANN ARBOR", "MINNEAPOLIS", "BILOXI", "KANSAS CITY", "ST LOUIS", "RENO", "LAS VEGAS", "MANCHESTER", "MORRISTOWN", "PARAMUS", "ALBUQUERQUE", "NEW YORK CITY", "SYRACUSE", "CHARLOTTE", "COLUMBUS", "CINCINNATI", "CLEVELAND", "PITTSBURGH", "PHILADELPHIA", "NEWPORT", "CHARLESTON", "NASHVILLE", "MEMPHIS", "HOUSTON", "DALLAS", "EL PASO", "PROVO", "ALEXANDRIA", "ROANOKE", "SEATTLE", "TACOMA", "WHEELING", "GREEN BAY", "MILWAUKEE", "JACKSON HOLE"]
    },    
  { 
  
    cat: "World Capitals",
    sel: false,
    items: ["KABUL", "TIRANA", "ALGIERS", "ANDORRA LA VELLA", "LUANDA", "BUENOS AIRES", "YEREVAN", "CANBERRA", "VIENNA", "BAKU", "NASSAU", "DHAKA", "MINSK", "BRUSSELS", "LA PAZ", "SARAJEVO", "BRASILIA", "SOFIA", "PHNOM PENH", "OTTAWA", "SANTIAGO", "BEIJING", "BOGOTA", "KINSHASA", "BRAZZAVILLE", "SAN JOSE", "ZAGREB", "HAVANA", "NICOSIA", "PRAGUE", "COPENHAGEN", "SANTO DOMINGO", "QUITO", "CAIRO", "SAN SALVADOR", "TALLINN", "ADDIS ABABA","HELSINKI", "PARIS", "TBILISI", "BERLIN", "ATHENS", "GUATEMALA CITY", "PORT AU PRINCE", "BUDAPEST", "REYKJAVIK", "NEW DELHI", "JAKARTA", "TEHRAN", "BAGHAD", "DUBLIN", "JERUSALEM", "ROME", "KINGSTON", "TOKYO", "AMMAN", "NAIROBI", "PRISTINA", "KUWAIT CITY", "VIENTIANE", "RIGA", "BEIRUT", "MONROVIA", "TRIPOLI", "VADUZ", "VILNIUS", "LUXEMBOURG", "KUALA LUMPUR", "MEXICO CITY", "ULAANBAATAR", "RABAT", "KATHMANDU", "AMSTERDAM", "WELLINGTON", "MANAGUA", "PYONGYANG", "OSLO", "MUSCAT", "ISLAMABAD", "PANAMA CITY", "ASUNCION", "LIMA", "MANILA", "WARSAW", "LISBON", "BUCHAREST", "MOSCOW", "RIYADH", "DAKAR", "EDINBUGH", "BELGRADE", "BRATISLAVA", "LJUBLJANA", "MOGADISHU", "CAPE TOWN", "SEOUL", "MADRID", "KHARTOUM", "STOCKHOLM", "BERN", "DAMASCUS", "TAIPEI", "BANGKOK", "TUNIS", "ANKARA", "KAMPALA", "KYIV", "KIEV", "ABU DHABI", "LONDON", "WASHINGTON DC", "MONTEVIDEO", "TASHKENT","CARACAS", "HANOI"]
  },  
  { 
    cat: "World Cities",
    sel: false,
    items: ["RIO DE JANEIRO", "MELBOURNE", "SYDNEY", "ADELAIDE", "PERTH", "INNSBRUCK", "SALZBURG", "GHENT", "BRUGES", "SAO PAOLO", "MONTREAL", "QUEBEC", "TORONTO", "CALGARY", "WINNIPEG", "VANCOUVER", "SHANGHAI", "ALEXANDRIA", "MARSEILLES", "MUNICH", "POTSDAM", "DUSSELDORF", "HAMBURG", "FRANKFURT", "MUMBAI", "CALCUTTA", "TEL AVIV", "BETHLEHEM", "FLORENCE", "MILAN", "VENICE", "YOKOHAMA", "KYOTO", "ACAPULCO", "CASABLANCA", "ROTTERDAM", "THE HAGUE", "CHRISTCHURCH", "KARACHI", "ISTANBUL", "KHARKOV", "LVIV", "LVOV","MANCHESTER", "LIVERPOOL", "OXFORD", "CAMBRIDGE", "ABERDEEN", "GLASGOW", "ZURICH", "GENEVA", "INTERLAKEN", "LUCERNE"]
    }, 
    { 
      cat: "Testing",
      sel: false,
      items: ["AMAZON", "NILE", "DO YOU WANT TO KNOW A SECRET"],
      }

  /*,
  , 
  ,
  , 
  */
]

const backgroundImagesPortrait=[
  "https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg",
  "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://cdn.pixabay.com/photo/2023/01/22/12/17/flower-7736238__340.jpg"
]

const backgroundImagesLandscape=[
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1600",
  "https://cdn.pixabay.com/photo/2021/01/09/20/23/road-5903402__340.jpg",
  "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=1600"
]

const audios=[
  "./auds/bgmusic.mp3", "./auds/app1.wav"
]

let helpText = "In this version of WORDLE, instead of solving for a 5 letter word, you will be trying to figure out an item belonging to a particular category. The answer can be anywhere from 4 to 20+ characters and can include spaces. The default category is U.S. Presidents, but that can be changed. Click on the 2nd icon from the right and all available categories will be displayed along with the number of items in that category. The active ones will be in black, the inactive in grey. Click to toggle each category. As in the original WORDLE, stats are provided, click on the bar-graph icon for a summary, then i, for info, for more details. TIPS - As far as difficulty goes, here a few differences from the original and some suggestions. First off, for any response over 10 characters, you will get 8 guesses. The game does not check for valid words, names, or places, so gibberish is allowed. In fact, it may be your best strategy. Long solutions will likely be multi-word solutions, and you may want to find those word breaks by entering all spaces for your first guess. Green spaces will indicate the word breaks. If you select multiple categories, things will be very difficult for you. But, you can give it a try and then if flummoxed, click on the mag glass icon to display what the random category chosen by the game is. Solving tip - On especially long wordles, after several guesses have been made, the game board can look quite busy. Click or tap the title 'WORLDLE' and the current row will be filled with all of the letters that you have correctly guessed. This often resuls in an a-ha moment when the solution jumps out at you. Then backup thru the word via the delete key or button and fill in the blanks. Note - on narrow screens, wordles over 24 letters will be cut off at 24."


let sound = true;
let soundPlayer = "";
//soundPlayer = new Audio ("./auds/bgmusic.mp3");
soundPlayer = new Audio (audios[Math.floor(Math.random()*audios.length)]);
soundPlayer.loop = true;
soundPlayer.volume = 0.065  ;
soundPlayer.currentTime = 1;


let fullScreen = false;
let wordsArray=[]
let keyboardClicks = false;

let playButtonEl = ""
const containerEl = document.getElementById('container')
let currentWordIndex = 0;
let guessedWordCount = 0;
let guessedWords = [[]]
let availableSpace = 1; 
let numofLetters = 5
let numofGuesses = 6
let wordle = ""
let gameInProgress = false;
let atLeastOneGuessMade = false;

let randomArray = 0;
let randomWordle = 0;
let revealLetterNum = 0;
const messageContainerEl = document.getElementById('message-container')

let categoryPreferences = [
  false, false, false, false, false, false, false, false, true, false, false, false, false, false, false
];

let resultsArray = []
let resultObj = {
  date: 0,
  wordle: "",
  guesses: 0
}

document.addEventListener("DOMContentLoaded", () => {

  initHelpModal();
    initStatsModal();
    initCategoriesModal();
    
    //initCog();
    initAudio();
    // Select background image based on portrait or landscape mode
    if (window.innerHeight > window.innerWidth){
      let randomImg = Math.floor(Math.random()*backgroundImagesPortrait.length)
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesPortrait[randomImg] + ")";
    } else {  
      let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")";
    }
    
    playButtonEl = document.getElementById("start")
    randCatEl = document.getElementById("randcat")

    playButtonEl.addEventListener("click", ({ target }) => {
       letsPlay()
     })

     randCatEl.addEventListener("click", ({ target }) => {
       console.log("clicked on category display");
       if (wordsArray){
       messageContainerEl.innerText = wordsArray[randomArray].cat;
       }
    })
    });

    /*
    function initLocalStorage() {
      const storedCurrentWordIndex = window.localStorage.getItem('currentWordIndex')
      if (!storedCurrentWordIndex){
        window.localStorage.setItem('currentWordIndex', currentWordIndex)
      } else {
        currentWordIndex = Number(storedCurrentWordIndex) 
      }
    }*/

function letsPlay() {
  // Clear the classes of the keyboard that were set in any previous Wordle
   initClasses();

   playMusic();

// INIT
wordsArray=[]

currentWordIndex = 0;
guessedWordCount = 0;
revealLetterNum = 0;
guessedWords = [[]]
availableSpace = 1; 
numofLetters = 5
numofGuesses = 6
wordle = ""
gameInProgress = true;

// END OF INIT
  
//


  messageContainerEl.innerText = ""
  wordsArray = []
  for (i=0; i<protoWordsArray.length; i++){
    if (protoWordsArray[i].sel){
       wordsArray.push(protoWordsArray[i])
    }
  }
  console.log("Checking wordsArray which is equal to " + wordsArray)
  if (wordsArray.length === 0){
    messageContainerEl.innerText = "Please select at least 1 category";
    return;
  }

  playButtonEl.style.display = "none";
  messageContainerEl.innerText = ""
  randomArray = wordsArray[Math.floor(Math.random()*wordsArray.length)];
  randomArray = Math.floor(Math.random()*wordsArray.length);
  randomWordle = Math.floor(Math.random()*(wordsArray[randomArray].items).length);
  console.log("randomArray = " + randomArray) 
  console.log("randomWordle = " + randomWordle) 
 // console.log(wordsArray[randomArray] + "length of array = " + wordsArray[randomArray].length)
  numofLetters = (wordsArray[randomArray].items[randomWordle]).length;
//  console.log(wordsArray[randomArray][randomWordle] + " has " + numofLetters + " letters in it")
  wordle = wordsArray[randomArray].items[randomWordle];
  if(window.innerWidth < 900){
    if (numofLetters > 24){
      numofLetters = 24;
      wordle = wordle.slice(0, 24);
    }
  }
  console.log("wordle = " + wordle +  " num of letters = " + numofLetters)
 // let guessedWordCount = 0;
  numofGuesses = 6;
  if (numofLetters > 10){
    numofGuesses = 8;
  }

  function initClasses(){
  /*  let keys = document.getElementsByClassName('correct-letter-in-place');
    if (keys){
    keys.forEach(key => {
      key.classList.remove("correct-letter-in-place")  
    });
    }
*/
    const allElements = document.querySelectorAll('*');
    
allElements.forEach((element) => {
  element.classList.remove('correct-letter-in-place');
  element.classList.remove('correct-letter');
  element.classList.remove('incorrect-letter');
});



  }
 
  createSquares();
  // Check to see if keyboard click event listener has already been set via the first game of the session  
  if (!keyboardClicks){
    console.log("about to call addKeyboard")
    addKeyboardClicks();
    document.addEventListener('keydown', function(event) {
      console.log ("key pressed was " + event.key)
      handleKeystroke(event.key)
      });
  }

  guessedWords = [[]]
  availableSpace = 1; 

  const keys = document.querySelectorAll('.keyboard-row button')


  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1]
  }

  function updateGuessedLetters(letter){
    console.log("updateGuessedLetter letter = " + letter)
    const currentWordArr = getCurrentWordArr()
    console.log('current array = ' + currentWordArr)
    console.log("numofLetters = " + numofLetters )
    if (currentWordArr && currentWordArr.length < numofLetters){
      currentWordArr.push(letter)
      const availableSpaceEl = document.getElementById(availableSpace)
      availableSpace++;
      console.log("availableSpace = " + availableSpace)
      availableSpaceEl.textContent = letter;
    }
  }

  function getIndicesOfLetter(letter, arr){
    const indices = [];
    let idx = arr.indexOf(letter);
    while (idx != -1){
      indices.push(idx);
      idx = arr.indexOf(letter, idx+1);
    }
    return indices;
  } // END OF getIndicesOfLetter

  function getTileClass(letter, index, currentWordArr) {
    const isCorrectLetter = wordle
      .toUpperCase()
      .includes(letter.toUpperCase());
      if (!isCorrectLetter){
        return "incorrect-letter";
      }

      const letterInThatPosition = wordle.charAt(index);
      const isCorrectPosition = letter.toLowerCase() === letterInThatPosition.toLowerCase();
      if (isCorrectPosition){
        return "correct-letter-in-place";
      }

  
       const isGuessedMoreThanOnce =
       currentWordArr.filter((l) => l === letter).length > 1;

       if (!isGuessedMoreThanOnce) {
        return "correct-letter";
      }

      const existsMoreThanOnce = wordle.split("").filter((l) => l === letter).length > 1;

    // is guessed more than once and exists more than once
    if (existsMoreThanOnce) {
      return "correct-letter";
    }

    const hasBeenGuessedAlready = currentWordArr.indexOf(letter) < index;

    const indices = getIndicesOfLetter(letter, wordle.split(""));
    const otherIndices = indices.filter((i) => i !== index);
    const isGuessedCorrectlyLater = otherIndices.some(
      (i) => i > index && currentWordArr[i] === letter
    );

    if (!hasBeenGuessedAlready && !isGuessedCorrectlyLater) {
      return "correct-letter";
    }

    return "incorrect-letter";


} // END OF getTileClass


  function handleSubmitWord(){
    console.log("entered handlesubmitword ")
    const currentWordArr = getCurrentWordArr();
    const guessedWord = currentWordArr.join("");
    if (guessedWord.length !== numofLetters){
      messageContainerEl.innerText = (`You entered ${currentWordArr.length} characters which is less than the ${numofLetters} needed`);
      return;
    }
    window.navigator.vibrate(450);
    //flipTile();

    atLeastOneGuessMade = true;
    let checkWordle = wordle;
    const guess = [];
  
    currentWordArr.forEach(tile => {
      console.log("pushing letter onto guess array - letter = " + tile)
      guess.push({letter: tile, color: 'dontknow'});
    })

    console.log("");
    console.log("");
    console.log("About to loop thru to look for Greys")
    guess.forEach(guess => {
      if (!checkWordle.includes(guess.letter.toUpperCase())){
        guess.color = 'incorrect-letter'
        console.log ("set grey overlay")
        }
    })





    console.log("About to loop thru to look for Greens")
    guess.forEach((guess, index) => {
      console.log("guess letter = " + guess.letter + "   wordle letter = " + wordle[index])
      if (guess.letter == wordle[index].toLowerCase()){
        guess.color = 'correct-letter-in-place'
   //     console.log("guess letter2 = " + guess.letter + "   wordle letter = " + wordle[index])
        console.log ("set green overlay")
        checkWordle = checkWordle.replaceAll(guess.letter.toUpperCase(), '')
        console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
        console.log (" ")
      }
    })

    console.log("");
    console.log("");
    console.log("About to loop thru to look for Yellows")
    guess.forEach(guess => {
      console.log("guess letter = " + guess.letter);
      if (checkWordle.includes(guess.letter.toUpperCase())){
        guess.color = 'correct-letter'
        console.log ("set yellow overlay")
        checkWordle = checkWordle.replaceAll(guess.letter.toUpperCase(), '')
        console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
        console.log (" ")
      }
    })




  
    let result = guessedWord.toUpperCase();

    const firstLetterId = guessedWordCount * numofLetters + 1;
    let interval = 2500 / numofLetters;


    currentWordArr.forEach((tile, index) => {
    
      setTimeout(() => {
    //    tile.classList.add("animate__flipInX")
    //    tile.classList.add(guess[index].color)
        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);
     //   if (letter === " "){
     //     letter = "space"
     //   }
     //  let keyboardLetter = letter.toLowerCase();
     //  const keyboardLetterEl = document.querySelector("[data-key=" + keyboardLetter + "]");
 

     //   console.log("keyboard letter = " + keyboardLetterEl)
        letterEl.classList.add(guess[index].color)
        letterEl.classList.add("animate__flipInX")
    //    addColorToKey(guess[index].letter, guess[index].color)
        if (tile === " "){
          tile = "space"
        }

    const keyboardEl = document.querySelector(`[data-key=${tile}]`);
    console.log ("keyboardEl = " + keyboardEl + " tile = " + tile);
    keyboardEl.classList.add(guess[index].color);

      }, interval * index)
  
    })

    guessedWordCount += 1;
    let date = new  Date();
//    resultObj.date = date.toString()
    resultObj.date = new Date();
    console.log("New date = " + resultObj.date)
    console.log("New date is of type " + typeof(resultObj.date))
    resultObj.wordle = wordle;
    console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
    let guessedWordUpper = guessedWord.toUpperCase();
    if (guessedWordUpper === wordle){
      messageContainerEl.innerText = "Congratulations!"
      const audio = new Audio ("./auds/success.mp3");
      audio.play()


      resultObj.guesses = guessedWordCount;
      let resultsArrayTemp = JSON.parse(window.localStorage.getItem('results'));
      if (resultsArrayTemp){
          resultsArray = JSON.parse(window.localStorage.getItem('results'));
          console.log("New date right before push = " + resultObj.date)
          resultsArray.push(resultObj);
          console.log("Array after push = " + resultsArray);
          console.log ("item date just added = " + resultsArray[resultsArray.length-1].date);
          window.localStorage.setItem('results', JSON.stringify(resultsArray));
      } else {
        resultsArray[0] = resultObj;
        window.localStorage.setItem('results', JSON.stringify(resultsArray));
      }

      setTimeout(function(){
        playButtonEl.innerText = "Play Again?";
        playButtonEl.style.display = "block";
    }, 4500);
      const totalWins = window.localStorage.getItem("totalWins") || 0;
      window.localStorage.setItem("totalWins", Number(totalWins) + 1);

      const currentStreak = window.localStorage.getItem("currentStreak") || 0;
      window.localStorage.setItem("currentStreak", Number(currentStreak) + 1);
      updateTotalGames();
    //  removeKeyboardListeners();
     return;
      
    }

    if (guessedWords.length ===  numofGuesses && guessedWord !== wordle) {
      resultObj.guesses = 10;
      let resultsArrayTemp = JSON.parse(window.localStorage.getItem('results'));
      if (resultsArrayTemp){
          resultsArray = JSON.parse(window.localStorage.getItem('results'));
          resultsArray.push(resultObj);
          window.localStorage.setItem('results', JSON.stringify(resultsArray));
      } else {
        resultsArray[0] = resultObj;
        window.localStorage.setItem('results', JSON.stringify(resultsArray));
      }

      messageContainerEl.innerText = (`Sorry, no more guesses. The wordle is ${wordle}`)
      window.localStorage.setItem("currentStreak", 0);
      const audio = new Audio ("./auds/negative.mp3");
      audio.play()
      updateTotalGames();     setTimeout(function(){
        playButtonEl.innerText = "Play Again?";
        playButtonEl.style.display = "block";
    }, 4500);




    //  removeKeyboardListeners();
      return;
    } 

    const audio = new Audio ("./auds/ascending.mp3");
    audio.play()
    guess.forEach(guess => {
      console.log("letter = " + guess.letter + " color = " + guess.color)
    }
    )




    guessedWords.push([]);
    console.log("Guessedwords length = " + guessedWords.length)


   /* 
    currentWordArr.forEach((letter, index) => {
      setTimeout(() => {
        const tileClass = getTileClass(letter, index, currentWordArr);
        if (tileClass){
          const letterId = firstLetterId + index;
          console.log("letter = " + letter);
          const letterEl = document.getElementById(letterId);
       //   if (letter === " "){
       //     letter = "space"
       //   }
       //  let keyboardLetter = letter.toLowerCase();
       //  const keyboardLetterEl = document.querySelector("[data-key=" + keyboardLetter + "]");
      //   console.log("keyboard letter = " + keyboardLetterEl)
          letterEl.classList.add("animate__flipInX")
          console.log ("class should have been set to flip")
          letterEl.classList.add(tileClass)
      //  letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
    //    letterEl.style.backgroundColor = tileColor;
    //    letterEl.style.borderColor = tileColor;
    //    keyboardLetterEl.style.backgroundColor = tileColor;
          const keyboardEl = document.querySelector(`[data-key=${letter}]`);
          console.log ("keyboardEl = " + keyboardEl);
          keyboardEl.classList.add(tileClass);
        }
      }, interval * index);  // END OF setTimeout
    });  // END OF forEach letter in the current word

    guessedWordCount += 1;
    console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
    let guessedWordUpper = guessedWord.toUpperCase();
    if (guessedWordUpper === wordle){
      messageContainerEl.innerText = "Congratulations!"
    }

    if (guessedWords.length ===  numofGuesses && guessedWord !== wordle) {
      window.alert(`Sorry, no more guesses. The wordle is ${wordle}`)
    } 


    guessedWords.push([]);
    console.log("Guessedwords length = " + guessedWords.length)*/
  } // END OF handleSubmitWord

  function updateTotalGames(){
    const totalGames = window.localStorage.getItem("totalGames") || 0;
    window.localStorage.setItem("totalGames", Number(totalGames) + 1);
    gameInProgress = false;
    atLeastOneGuessMade = false;
  }


  function createSquares(){
    let screenWidth = window.innerWidth;
    if (screenWidth > 700){
      screenWidth = 700;
    }
    let screenHeight = window.innerHeight;

    console.log ("createSquares  screenWidth = " + screenWidth + "  screenHeight = " + screenHeight);

    const gameBoard = document.getElementById("board")


    // Clear out any elements of class "square"
    let squares = document.getElementsByClassName('square');
    while (squares[0]){
      squares[0].parentNode.removeChild(squares[0]);
    }

    for (let i = 0; i < (numofLetters*numofGuesses); i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", i + 1);
      gameBoard.appendChild(square)
    }  

    //  FROM HERE TO END OF FUNCTION ADDED BECAUSE NUMBER OF LETTERS IN WORDLE CAN VARY
    const board = document.getElementById("board")
    const square = document.querySelectorAll(".square")
    console.log(square)
    square.forEach(square => {
      square.style.width = (screenWidth / (numofLetters + 4) + 'px');
      square.style.height = ((screenHeight / 15) + 'px');
      square.style.height = (screenWidth / (numofLetters + 4) + 'px');
      square.style.fontSize = (screenWidth / (numofLetters + 4) + 'px');
      if (screenWidth > screenHeight){
        square.style.height = ((screenHeight / 15) + 'px');
        square.style.fontSize = ((screenHeight / 20) + 'px');

      }
    });
    board.style.gridTemplateColumns = 'repeat(' + numofLetters + ', 1fr)'
  
  } // END OF createSquares

  function handleDelete(){
    const currentWordArr = getCurrentWordArr()
    console.log(currentWordArr)
    if (currentWordArr.length === 0){
      console.log("blank array")
      return;
    }
    currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr

    const lastLetterEl = document.getElementById(availableSpace - 1)

    lastLetterEl.innerHTML = ""   
    availableSpace--; 

  } // END OF handleDelete


  function removeKeyboardListeners(){
    console.log("entered remove listeners")
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
      console.log("keyboard count = " + i)
      keys[i].removeEventListener("click")
    }
   }

  function addKeyboardClicks(){    
      keyboardClicks = true;
      const keys = document.querySelectorAll(".keyboard-row button");
      for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", ({ target }) => {
          if (!gameInProgress){
            return;
          }
      
          messageContainerEl.innerText = ""

          let key = target.getAttribute("data-key");
          target.blur() 
  
 
          if (key === "enter") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleSubmitWord();
            return;
          }
  
          if (key === "del") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleDelete();
            return;
          }

          if (key === "space") {
            const audio = new Audio ("./auds/keypress2.wav");
            audio.play()
            key = " "
          }
          const audio = new Audio ("./auds/keypress2.wav");
          audio.play()
          updateGuessedLetters(key);
        });
      }  // END OF FOR KEYBOARD LOOP

      const titleEl = document.querySelector(".title")
      titleEl.addEventListener("click", ({ target }) => {
      if (!atLeastOneGuessMade){
         return;
        }
        populateRow();
      });
    


   //   holdSpace();




    } // END OF Ians addKeyboardClicks 

function populateRow(){
  console.log("add code to place any green tiles from above onto the current row")
  const allSquaresEl = document.querySelectorAll(".square")
  const currentWordArr = getCurrentWordArr()
  guessedWords[guessedWords.length - 1] = [];
  availableSpace = guessedWordCount * numofLetters + 1;
  console.log ("available spacei in  pop row is " + availableSpace)


  for (i=0; i<numofLetters; i++){
 //   for (i=0; i<4; i++){
    // check for equal modulus values that would indicate the same column, if find correct letter in correct space class output it
    // get id then check class
   // element.classList.contains(class);
 //   updateGuessedLetters('x');
    // loop thru checking all columns except for the last
    let foundGreen = false;
    for (j=0; j<numofGuesses; j++){
    //  let idNum = Number(allSquaresEl[(i*j)-1].id)
      let idNum = (i)+(j*numofLetters)
      console.log ("id num in populateRow function = " + idNum)
      if (allSquaresEl[idNum].classList.contains("correct-letter-in-place")){
        console.log("correct letter in place - that letter is " + allSquaresEl[idNum].innerText )
       /* if (j%numofLetters === i){*/
           foundGreen = (allSquaresEl[idNum].innerText.toLowerCase())
           console.log("FOUNDGREEN SET TO " + foundGreen )
      /*  }*/
      } 
      } // end of for j
    if (foundGreen){
      updateGuessedLetters(foundGreen)
    } else {
      updateGuessedLetters(' ')
    }
  }
} //END OF POPULATE ROW


    function holdSpace(){
          // The item (or items) to press and hold on
    let itemSpace = document.querySelector(".space-button");
    let itemDel = document.querySelector(".del-button");

    let timerID;
    let counter = 0;

    let spaceHoldEvent = new CustomEvent("spaceHold");
    let delHoldEvent = new CustomEvent("delHold");  

    // Increase or decreae value to adjust how long
    // one should keep pressing down before the pressHold
    // event fires
    let pressHoldDuration = 50;

    // Listening for the mouse and touch events    
    itemSpace.addEventListener("mousedown", pressingDown, false);
    itemSpace.addEventListener("mouseup", notPressingDown, false);
    itemSpace.addEventListener("mouseleave", notPressingDown, false);

    itemSpace.addEventListener("touchstart", pressingDown, false);
    itemSpace.addEventListener("touchend", notPressingDown, false);
    // Listening for our custom pressHold event
    itemSpace.addEventListener("spaceHold", spaces, false);

        // Listening for the mouse and touch events on Delete    
        itemDel.addEventListener("mousedown", pressingDown2, false);
        itemDel.addEventListener("mouseup", notPressingDown2, false);
        itemDel.addEventListener("mouseleave", notPressingDown2, false);
    
        itemDel.addEventListener("touchstart", pressingDown2, false);
        itemDel.addEventListener("touchend", notPressingDown2, false);
        // Listening for our custom pressHold event
        itemDel.addEventListener("delHold", deletes, false);

    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);
      console.log ("e key = " + e.key)
      e.preventDefault();

      console.log("Pressing!");
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer() {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
      } else {
        console.log("Press threshold reached!");
        itemSpace.dispatchEvent(spaceHoldEvent);
      }
    }




    function pressingDown2(e) {
      // Start the timer
      requestAnimationFrame(timer2);
      e.preventDefault();

      console.log("Pressing del!");
    }

    function notPressingDown2(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing del!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer2() {
      console.log("Timer2 tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer2);
        counter++;
      } else {
        console.log("Del Press threshold reached!");
        itemDel.dispatchEvent(delHoldEvent);
      }
    }

    function spaces(e) {
      console.log("pressHold event fired on spaces!");
      for (i=1; i<30; i++){
        updateGuessedLetters('x');
      }
      console.log("done with loop of spaces");
      // submit all the spaces
  //     handleSubmitWord();
     }

     function deletes(e) {
      console.log("pressHold event fired on delete!");
      for (i=1; i<30; i++){
       handleDelete();
      }
     }


    }





/*   MAY WANT TO ADD SOME OF THIS INTO ABOVE FUNCTION

      var audio = new Audio("./keypress.wav");
      audio.play();
      //let containerEl = document.getElementById('container')
      //containerEl.requestFullscreen();
      if (letter === "enter" ){
        handleSubmitWord();
        return;
      }

      if (letter === "del" ){
        console.log("available space = " + availableSpace)
        handleDeleteLetter();
        return;
      }

      if (letter === 'space'){
        letter = ' ';
      }
      console.log('clicked letter = ' + letter )
      updateGuessedWords(letter);
    }  // END OF addKeyboardClicks 
*/


  function handleKeystroke(letter){
    if (!gameInProgress){
      return;
    }

    console.log ("key in handleKeystroke function - "  + letter)
    messageContainerEl.innerText = "";
    let containerEl = document.getElementById('container')
  //  containerEl.requestFullscreen();

  if (letter === "Enter" || letter === "Delete"){
    console.log ("key in handleKeystroke function2 - "  + letter)
  } else {
      let alpha = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
      let result = alpha.includes(letter);
      if (!result){
        return;
      }
    }
    if (letter === "Enter" ){
      console.log ("about to submitword")
      handleSubmitWord();
      return;
    }

    if (letter === "Delete" ){
      console.log("available space = " + availableSpace)
      handleDelete();
      return;
    }


    console.log("dont want to reach here")
    letter = letter.toLowerCase();
    updateGuessedLetters(letter);

  }

}

// THIS LOGIC IS TAKEN FROM ANIA KUBOWS WORDLE CLONE - ITS COLOR LOGIC WORKS CORRECTLY 
const flipTile = () => {
  // pick up at 
  const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;

  let checkWordle = wordle;
  const guess = [];

  rowTiles.forEach(tile => {
    guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
  })

  guess.forEach((guess, index) => {
    if (guess.letter == wordle[index]){
      guess.color = 'green-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  guess.forEach(guess => {
    if (checkWordle.includes(guess.letter)){
      guess.color = 'yellow-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  rowTiles.forEach((tile, index) => {
    
    setTimeout(() => {
      tile.classList.add('flip')
      tile.classList.add(guess[index].color)
      addColorToKey(guess[index].letter, guess[index].color)
    }, 500 * index)

  })
}


function initHelpModal() {
  const modal = document.getElementById("help-modal");
 // modal.textContent = "Explanation of this version of WORDLE"
  // Get the button that opens the modal
  const btn = document.getElementById("help");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-help");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on help button")
    modal.style.display = "block";
    helpEl = document.querySelector(".modal-body")
    helpEl.innerText = helpText + "\n" + "\n"
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function updateStatsModal(){
  const currentStreak = window.localStorage.getItem("currentStreak");
  const totalWins = window.localStorage.getItem("totalWins");
  const totalGames = window.localStorage.getItem("totalGames");
  const audio = new Audio ("./auds/stats.mp3");
  audio.play()

  document.getElementById('total-played').textContent = totalGames;
  document.getElementById('total-wins').textContent = totalWins;
  document.getElementById('current-streak').textContent = currentStreak;

  const winPct = Math.round((totalWins / totalGames) * 100) || 0
  document.getElementById('win-pct').textContent = winPct;

}

function initStatsModal() {
  const modal = document.getElementById("stats-modal");
  // Get the button that opens the stats modal
  const btn = document.getElementById("stats");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-stats");
  const delEl = document.getElementById("delete-stats");
  const delBodyEl = document.getElementById("delete-body");
  const delModal = document.getElementById("delete-modal");
  const closeDel = document.getElementById("close-delete");
  const yesEl = document.getElementById("yes");
  const noEl = document.getElementById("no");

  // Get the element that shows results
  const resultsEl = document.querySelector(".results")
  const resultsButton = document.getElementById("stats-info");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on stats button classlist = " + btn.classList)
    updateStatsModal();
    modal.style.display = "block";
    helpEl = document.getElementById("stats-modal")
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    resultsEl.style.display = "none";
  });


    // When the user clicks on delete stats <span> (x), display confirmation box
    delEl.addEventListener("click", function () {
      delModal.style.display = "block";
    });


      // When the user clicks on <span> (x), close the delete modal
    closeDel.addEventListener("click", function () {
      delModal.style.display = "none";
    });

      // When the user clicks on Yes, clear history via localstorage clear the results tray and close delete modal
      yesEl.addEventListener("click", function () {
        localStorage.removeItem("results")
        localStorage.removeItem("currentStreak")
        localStorage.removeItem("totalWins")
        localStorage.removeItem("totalGames")
        const resultsTrayEl = document.getElementById("results-tray");
        resultsTrayEl.innerHTML = ""
        delModal.style.display = "none";
        resultsArray = [];
      });

      // When the user clicks on No, close delete modal
      noEl.addEventListener("click", function () {
        delModal.style.display = "none";
      });
      

  

    // When the user clicks on stats info (i) show results
    resultsButton.addEventListener("click", function () {
      console.log("just clicked on results button")
      resultsEl.style.display = "block";
      buildResults();
    });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      resultsEl.style.display = "none";
    }
  });
}

function buildResults(){
  console.log("entered build results")
  const resultsTrayEl = document.getElementById("results-tray")
  // LOOP THRU RESULTS IN REVERSE ORDER

  let resultItemEl = document.createElement('div')
//      resultItemEl.innerText = "here are where results will go"
//  resultsTrayEl.appendChild(resultItemEl)

  let resultsArrayTemp = JSON.parse(window.localStorage.getItem('results'));
  if (resultsArrayTemp){
      resultsArray = JSON.parse(window.localStorage.getItem('results'));
      console.log("resultsArray =  " + resultsArray);
      console.log("results array date = " + resultsArray[resultsArray.length-1].date)
      date = new Date(resultsArray[resultsArray.length-1].date);
      const year = date.getFullYear();
      const hours = date.getHours();
      console.log("after getfullyear function year = " + year + " hours = " + hours)
      resultsTrayEl.innerHTML = ""
      let resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Date"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Wordle"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "#"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)

      for (i=resultsArray.length - 1; i>-1; i--){
        let resultItemEl = document.createElement('div')
        let date = new Date(resultsArray[i].date);
        let year = date.getFullYear();
        let yy = year.toString().slice(2);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        resultItemEl.innerText = month + "/" + day + "/" + yy
        if (resultsArray[i].guesses === 10){
          resultItemEl.style.color = "red";  
        }
        let screenWidth = window.innerWidth;
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].wordle
        if (resultsArray[i].wordle.length > 20){
          if (screenWidth < 400){
             resultItemEl.innerText = resultsArray[i].wordle.slice(0, 18) + "..."
          }
        }
        if (resultsArray[i].guesses === 10){
          resultItemEl.style.color = "red";  
        }
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].guesses
        if (resultsArray[i].guesses === 10){
          resultItemEl.innerText = "-"  
          resultItemEl.style.color = "red";
        }
        resultsTrayEl.appendChild(resultItemEl)
      }
      // write out buffer for padding
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)

  }

}

function updateCategoriesModal(){
 /* const currentStreak = window.localStorage.getItem("currentStreak");
  const totalWins = window.localStorage.getItem("totalWins");
  const totalGames = window.localStorage.getItem("totalGames");

  document.getElementById('total-played').textContent = totalGames;
  document.getElementById('total-wins').textContent = totalWins;
  document.getElementById('current-streak').textContent = currentStreak;

  const winPct = Math.round((totalWins / totalGames) * 100) || 0
  document.getElementById('win-pct').textContent = winPct;
*/

let categories = document.querySelectorAll(".category")
for (i=0; i<categories.length; i++){
  if (protoWordsArray[i].sel){
    categories[i].style.color = "black";
    categories[i].style.fontWeight = "bold";

  } else {
     categories[i].style.color = "grey";
     categories[i].style.fontWeight = "normal";

  }

}

}


function initCategoriesModal() {
  // Look for category preferences in localstorage
  // if found apply those values to the protoarray
  console.log("add category local storage get logic")
  let categoryPreferencesTemp = JSON.parse(window.localStorage.getItem('categoryPreferences'));

  if (categoryPreferencesTemp) {
    categoryPreferences = JSON.parse(window.localStorage.getItem('categoryPreferences'))
    console.log("prefernces = " + categoryPreferences)
    for (i=0; i<protoWordsArray.length; i++){
      protoWordsArray[i].sel = categoryPreferences[i]
    }
}
  const modal = document.getElementById("categories-modal");
  // Get the button that opens the categories modal
  const btn = document.getElementById("categories");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-categories");


  const categoriesContainerEl = document.getElementById("categories-body")

  for (i=0; i<protoWordsArray.length; i++){
    let category = document.createElement("div");
    category.innerText = `${protoWordsArray[i].cat} ${protoWordsArray[i].items.length}`;
    category.classList.add("category")
    category.id = i;
    categoriesContainerEl.appendChild(category);
    category.addEventListener("click", ({ target }) => {
       // window.alert(category.innerText + category.id)
        protoWordsArray[category.id].sel = !(protoWordsArray[category.id].sel)
        if (protoWordsArray[category.id].sel){
          const audio = new Audio ("./auds/shortgood.mp3");
          audio.play()
        } 
        else {
          const audio = new Audio ("./auds/pop39222.mp3");
          audio.play()     
        }

        updateCategoriesModal()
      });
  }

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on categories button")
    updateCategoriesModal();
    const audio = new Audio ("./auds/shortgood.mp3");
    audio.play()
    modal.style.display = "block";
    helpEl = document.getElementById("categories-modal")
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    preserveCategories();

  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function preserveCategories(){
  console.log("add category local storage update logic in preserve function")
    for (i=0; i<protoWordsArray.length; i++){
      console.log(protoWordsArray[i].sel)
      console.log(categoryPreferences[i])
      categoryPreferences[i] = protoWordsArray[i].sel
    }
    window.localStorage.setItem('categoryPreferences', JSON.stringify(categoryPreferences));
}





function revealLetter(){
  console.log ("entered reveal letter function")
 // const currentWordArr = getCurrentWordArr()

  const numberOfGuessedWords = guessedWords.length;
  currentWordArr = guessedWords[numberOfGuessedWords - 1]
  let letter = wordle[revealLetterNum]
  console.log('current array = ' + currentWordArr)
  console.log("numofLetters = " + numofLetters )
    currentWordArr[revealLetterNum] = letter;
    //const availableSpaceEl = document.getElementById(revealLetterNum)
  //  availableSpaceEl.textContent = letter;
    const availableSpaceEl = document.getElementById(revealLetterNum+1)
    availableSpaceEl.textContent = letter;
    revealLetterNum++

}

function initAudio(){
 // let btn = document.querySelector(".toggle");
let icon = document.querySelector(".fa-volume-up");

icon.onclick = function (){
    music();
    console.log("classlist when clicked = " + icon.classList)
    if(icon.classList.contains("fa-volume-up")){
        icon.classList.replace("fa-volume-up", "fa-volume-off");
    }
    else{
        icon.classList.replace("fa-volume-off", "fa-volume-up");
    }
}
}


function music(){
  console.log("entered music toggle")
  sound = !sound;
  if (sound===false){
    if (soundPlayer){
      soundPlayer.pause();
    }
  }
  if (sound===true){
    if (soundPlayer){
      soundPlayer.play();
    }
  }
}


function playMusic(){
  if (sound){
  soundPlayer.play();
  }
}

