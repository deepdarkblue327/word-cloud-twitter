var words = [
{text:'mar lago', size: 99},
{text:'tax cuts', size: 99},
{text:'presidential campaign', size: 98},
{text:'mr schumer', size: 98},
{text:'mr strange', size: 97},
{text:'trump also', size: 97},
{text:'new jersey', size: 97},
{text:'federal government', size: 97},
{text:'mr flake', size: 96},
{text:'first time', size: 96},
{text:'national anthem', size: 95},
{text:'meeting mr', size: 95},
{text:'islamic state', size: 94},
{text:'presidential election', size: 94},
{text:'would like', size: 94},
{text:'mr corker', size: 94},
{text:'b director', size: 93},
{text:'oval office', size: 93},
{text:'mr rosenstein', size: 93},
{text:'mr kelly', size: 93},
{text:'newsletters mr', size: 91},
{text:'dont know', size: 91},
{text:'op ed', size: 91},
{text:'nuclear deal', size: 91},
{text:'social media', size: 90},
{text:'next year', size: 90},
{text:'way think', size: 9},
{text:'trump behavior', size: 9},
{text:'old days', size: 9},
{text:'americas europe', size: 9},
{text:'christopher werth', size: 9},
{text:'daughter mr', size: 9},
{text:'trump attacked', size: 9},
{text:'trump asia', size: 9},
{text:'quotation day', size: 9},
{text:'president spent', size: 9},
{text:'racially charged', size: 9},
{text:'armed forces', size: 9},
{text:'quite like', size: 9},
{text:'trump anti', size: 9},
{text:'president spoke', size: 9},
{text:'black white', size: 9},
{text:'varying degrees', size: 9},
{text:'minor beta', size: 9},
{text:'administration efforts', size: 9},
{text:'trump businesses', size: 9},
{text:'way trump', size: 9},
{text:'bob mueller', size: 9},
{text:'american foreign', size: 9},
{text:'trump daughter', size: 9},
{text:'president repeatedly', size: 9},
{text:'american interests', size: 9},
{text:'deputy chief', size: 9},
{text:'president republican', size: 9},
{text:'deputy assistant', size: 9},
{text:'government entity', size: 9},
{text:'told trump', size: 9},
{text:'tech companies', size: 9},
{text:'trump company', size: 9},
{text:'told us', size: 9},
{text:'trump claim', size: 9},
{text:'blog post', size: 9},
{text:'meet trump', size: 9},
{text:'way want', size: 9},
{text:'minister justin', size: 9},
{text:'raised eyebrows', size: 9},
{text:'information administration', size: 9},
{text:'blue red', size: 9},
{text:'american woman', size: 9},
{text:'discuss internal', size: 9},
{text:'radio show', size: 9},
{text:'shook heads', size: 9},
{text:'power would', size: 9},
{text:'administration make', size: 9},
{text:'medical bills', size: 9},
{text:'grace period', size: 9},
{text:'administration decision', size: 9},
{text:'tax evasion', size: 9},
{text:'vice chairman', size: 9},
{text:'said dont', size: 9},
{text:'pay gap', size: 9},
{text:'arizona chairman', size: 9},
{text:'great grandfather', size: 9},
{text:'year flood', size: 9},
{text:'follow us', size: 9},
{text:'president used', size: 9},
{text:'one end', size: 9},
{text:'timed americas', size: 9},
{text:'class families', size: 9},
{text:'putin twice', size: 9},
{text:'big guy', size: 9},
{text:'said democrats', size: 9},
{text:'list prices', size: 9},
{text:'zalmay khalilzad', size: 9},
{text:'big enough', size: 9},
{text:'president weighed', size: 9},
{text:'speech said', size: 9},
{text:'one greatest', size: 9},
{text:'listen computer', size: 9},
{text:'listen daily', size: 9},
{text:'trip moscow', size: 9},
{text:'angry anybody', size: 9},
{text:'one important', size: 9},
{text:'vietnam president', size: 9},
{text:'clean air', size: 9},
{text:'threatened shut', size: 9},
{text:'president tweet', size: 9},
{text:'power sector', size: 9},
{text:'bill rights', size: 9},
{text:'dialogue mr', size: 9},
{text:'administration could', size: 9},
{text:'muttered arthur', size: 9},
{text:'editions timed', size: 9},
{text:'without fear', size: 9},
{text:'administration argued', size: 9},
{text:'administration also', size: 9},
{text:'true mr', size: 9},
{text:'said eric', size: 9},
{text:'questions meeting', size: 9},
{text:'sway election', size: 9},
{text:'copy hitch', size: 9},
{text:'amount time', size: 9},
{text:'deal called', size: 9},
{text:'complete power', size: 9},
{text:'year also', size: 9},
{text:'deal could', size: 9},
{text:'threat posed', size: 9},
{text:'way new', size: 9},
{text:'year campaign', size: 9},
{text:'ever said', size: 9},
{text:'truck drivers', size: 9},
{text:'veteran washington', size: 9},
{text:'educated class', size: 9},
{text:'within days', size: 9},
{text:'scrutiny mr', size: 9},
{text:'states mexico', size: 9},
{text:'american flag', size: 9},
{text:'officials would', size: 9},
{text:'chinese companies', size: 9},
{text:'instead said', size: 9},
{text:'trump matter', size: 9},
{text:'law called', size: 9},
{text:'around one', size: 9},
{text:'law senior', size: 9},
{text:'friday four', size: 9},
{text:'trump less', size: 9},
{text:'cut short', size: 9},
{text:'briefings guide', size: 9},
{text:'briefing delivered', size: 9},
{text:'ten minutes', size: 9},
{text:'president long', size: 9},
{text:'trump knew', size: 9},
{text:'check full', size: 9},
{text:'lawyer marc', size: 9},
{text:'need look', size: 9},
{text:'could end', size: 9},
{text:'cuts would', size: 9},
{text:'associated press', size: 9},
{text:'free world', size: 9},
{text:'pardoned joe', size: 9},
{text:'trump interview', size: 9},
{text:'free newsletters', size: 9},
{text:'respect flag', size: 9},
{text:'free market', size: 9},
{text:'breathe smart', size: 9},
{text:'trump including', size: 9},
{text:'melissa eddy', size: 9},
{text:'associates russia', size: 9},
{text:'wealthy individuals', size: 9},
{text:'unlike previous', size: 9},
{text:'president known', size: 9},
{text:'lavrov russian', size: 9},
{text:'trump never', size: 9},
{text:'last five', size: 9},
{text:'trump pardoned', size: 9},
{text:'brower said', size: 9},
{text:'last season', size: 9},
{text:'people pre', size: 9},
{text:'brother law', size: 9},
{text:'security team', size: 9},
{text:'estate company', size: 9},
{text:'universe said', size: 9},
{text:'estate developers', size: 9},
{text:'trump nominated', size: 9},
{text:'said lot', size: 9},
{text:'could provide', size: 9},
{text:'said looking', size: 9},
{text:'really good', size: 9},
{text:'could possibly', size: 9},
{text:'university chicago', size: 9},
{text:'president involved', size: 9},
{text:'university law', size: 9},
{text:'also spoke', size: 9},
{text:'trump moves', size: 9},
{text:'tensions north', size: 9},
{text:'trump monday', size: 9},
{text:'good moment', size: 9},
{text:'office building', size: 9},
{text:'p kelley', size: 9},
{text:'really like', size: 9},
{text:'words mr', size: 9},
{text:'breaking news', size: 9},
{text:'could carry', size: 9},
{text:'help please', size: 9},
{text:'daily inbox', size: 9},
{text:'officials also', size: 9},
{text:'trump fans', size: 9},
{text:'even harder', size: 9},
{text:'officials briefed', size: 9},
{text:'president power', size: 9},
{text:'television cameras', size: 9},
{text:'emissions power', size: 9},
{text:'trump expressed', size: 9},
{text:'born financier', size: 9},
{text:'telephone calls', size: 9},
{text:'native american', size: 9},
{text:'left mr', size: 9},
{text:'rest world', size: 9},
{text:'spoke president', size: 9},
{text:'meeting june', size: 9},
{text:'seconds later', size: 9},
{text:'ranking democrat', size: 9},
{text:'president putin', size: 9},
{text:'range free', size: 9},
{text:'devin p', size: 9},
{text:'former pharmaceutical', size: 9},
{text:'china president', size: 9},
{text:'american chemistry', size: 9},
{text:'american citizens', size: 9},
{text:'american civil', size: 9},
{text:'deputy secretary', size: 9},
{text:'much trump', size: 9},
{text:'earthman said', size: 9},
{text:'leonhardt article', size: 9},
{text:'us briefing', size: 9},
{text:'least four', size: 9},
{text:'statements mr', size: 9},
{text:'leadership mr', size: 9},
{text:'president national', size: 9},
{text:'trump history', size: 9},
{text:'extrajudicial killings', size: 9},
{text:'president need', size: 9},
{text:'chemistry council', size: 9},
{text:'statement thursday', size: 9},
{text:'updated morning', size: 9},
{text:'always thought', size: 9},
{text:'nearly million', size: 9},
{text:'leaders mr', size: 9},
{text:'social justice', size: 9},
{text:'telling people', size: 9},
{text:'people country', size: 9},
{text:'computer ios', size: 9},
{text:'meeting set', size: 9},
{text:'trump going', size: 9},
{text:'meetings russian', size: 9},
{text:'section daily', size: 9},
{text:'trump gave', size: 9},
{text:'reached deal', size: 9},
{text:'device android', size: 9},
{text:'fox business', size: 9},
{text:'response hurricane', size: 9},
{text:'four people', size: 9},
{text:'meeting though', size: 9},
{text:'mind set', size: 9},
{text:'urban development', size: 9},
{text:'four global', size: 9},
{text:'much way', size: 9},
{text:'put aside', size: 9},
{text:'one largest', size: 9},
{text:'party establishment', size: 9},
{text:'house later', size: 9},
{text:'haley said', size: 9},
{text:'take meeting', size: 9},
{text:'take look', size: 9},
{text:'bannon mr', size: 9},
{text:'across globe', size: 9},
{text:'want hear', size: 9},
{text:'profits foreign', size: 9},
{text:'southern border', size: 9},
{text:'southeast asian', size: 9},
{text:'supervising program', size: 9},
{text:'want say', size: 9},
{text:'man standing', size: 9},
{text:'band together', size: 9},
{text:'house aide', size: 9},
{text:'white robots', size: 9},
{text:'south florida', size: 9},
{text:'say hello', size: 9},
{text:'come terms', size: 9},
{text:'hours earlier', size: 9},
{text:'february mr', size: 9},
{text:'south asia', size: 9},
{text:'manafort president', size: 9},
{text:'hour later', size: 9},
{text:'according senior', size: 9},
{text:'manafort rick', size: 9},
{text:'wanted know', size: 9},
{text:'progress made', size: 9},
{text:'trade association', size: 9},
{text:'white evangelical', size: 9},
{text:'top republican', size: 9},
{text:'made president', size: 9},
{text:'wide ranging', size: 9},
{text:'taking away', size: 9},
{text:'magazine headline', size: 9},
{text:'traditional republican', size: 9},
{text:'acting like', size: 9},
{text:'find new', size: 9},
{text:'since last', size: 9},
{text:'colluded russian', size: 9},
{text:'companies like', size: 9},
{text:'taken place', size: 9},
{text:'housing urban', size: 9},
{text:'dust cloud', size: 9},
{text:'trade said', size: 9},
{text:'early june', size: 9},
{text:'opposition party', size: 9},
{text:'taken care', size: 9},
{text:'denied mr', size: 9},
{text:'com follow', size: 9},
{text:'super bowl', size: 9},
{text:'young woman', size: 9},
{text:'take us', size: 9},
{text:'slowly carefully', size: 9},
{text:'take trump', size: 9},
{text:'take stand', size: 9},
{text:'house office', size: 9},
{text:'moore mr', size: 9},
{text:'management consultant', size: 9},
{text:'tower moscow', size: 9},
{text:'sunday morning', size: 9},
{text:'e u', size: 9},
{text:'fellow citizens', size: 9},
{text:'probably would', size: 9},
{text:'home said', size: 9},
{text:'conservative media', size: 9},
{text:'home mr', size: 9},
{text:'russia scandal', size: 9},
{text:'markets tips', size: 9},
{text:'russia trump', size: 9},
{text:'russia united', size: 9},
{text:'babel fish', size: 9},
{text:'conservative populist', size: 9},
{text:'york representative', size: 9},
{text:'russia would', size: 9},
{text:'russian collusion', size: 9},
{text:'happened mr', size: 9},
{text:'account mr', size: 9},
{text:'russian connection', size: 9},
{text:'post office', size: 9},
{text:'private lawyer', size: 9},
{text:'russian election', size: 9},
{text:'committee democrats', size: 9},
{text:'total perspective', size: 9},
{text:'b b', size: 9},
{text:'mohammad javad', size: 9},
{text:'democrats white', size: 9},
{text:'others like', size: 9},
{text:'earlier mr', size: 9},
{text:'russia last', size: 9},
{text:'mark landlernov', size: 9},
{text:'managing director', size: 9},
{text:'democratic values', size: 9},
{text:'fed governor', size: 9},
{text:'matthew rosenberg', size: 9},
{text:'hotel room', size: 9},
{text:'six people', size: 9},
{text:'wants make', size: 9},
{text:'away arthur', size: 9},
{text:'hotel chain', size: 9},
{text:'many democrats', size: 9},
{text:'primary challenges', size: 9},
{text:'yet trump', size: 9},
{text:'coming back', size: 9},
{text:'time come', size: 9},
{text:'monica lewinsky', size: 9},
{text:'many republican', size: 9},
{text:'money pay', size: 9},
{text:'democrat senate', size: 9},
{text:'rural areas', size: 9},
{text:'backed away', size: 9},
{text:'federal flood', size: 9},
{text:'back wall', size: 9},
{text:'hope hicks', size: 9},
{text:'monetary fund', size: 9},
{text:'earlier week', size: 9},
{text:'accused news', size: 9},
{text:'democratic senators', size: 9},
{text:'tour asia', size: 9},
{text:'democratic support', size: 9},
{text:'supporter mr', size: 9},
{text:'made much', size: 9},
{text:'greatest witch', size: 9},
{text:'grisham said', size: 9},
{text:'important said', size: 9},
{text:'long said', size: 9},
{text:'published weekdays', size: 9},
{text:'long sought', size: 9},
{text:'connected russian', size: 9},
{text:'strategic partnership', size: 9},
{text:'didnt notice', size: 9},
{text:'mr simpson', size: 9},
{text:'evidence trump', size: 9},
{text:'wind solar', size: 9},
{text:'mr schiff', size: 9},
{text:'control association', size: 9},
{text:'longtime friend', size: 9},
{text:'sign mr', size: 9},
{text:'longtime personal', size: 9},
{text:'look around', size: 9},
{text:'part opinion', size: 9},
{text:'clinton email', size: 9},
{text:'mr poymanov', size: 9},
{text:'rinat akhmetshin', size: 9},
{text:'mr noah', size: 9},
{text:'another point', size: 9},
{text:'clinton president', size: 9},
{text:'clinton presidential', size: 9},
{text:'public schools', size: 9},
{text:'years earlier', size: 9},
{text:'win mr', size: 9},
{text:'years away', size: 9},
{text:'long island', size: 9},
{text:'mr jackson', size: 9},
{text:'ms andersen', size: 9},
{text:'flying saucer', size: 9},
{text:'year percent', size: 9},
{text:'much much', size: 9},
{text:'department special', size: 9},
{text:'annie brown', size: 9},
{text:'put away', size: 9},
{text:'said mattress', size: 9},
{text:'green cards', size: 9},
{text:'put america', size: 9},
{text:'trillian said', size: 9},
{text:'inbox sunday', size: 9},
{text:'policy rules', size: 9},
{text:'right back', size: 9},
{text:'three minutes', size: 9},
{text:'best friend', size: 9},
{text:'presidential nomination', size: 9},
{text:'one people', size: 9},
{text:'attention mr', size: 9},
{text:'year state', size: 9},
{text:'target mr', size: 9},
{text:'way could', size: 9},
{text:'side mr', size: 9},
{text:'mish mash', size: 9},
{text:'presidential race', size: 9},
{text:'decades long', size: 9},
{text:'side side', size: 9},
{text:'year would', size: 9},
{text:'public life', size: 9},
{text:'decision give', size: 9},
{text:'rosenstein said', size: 9},
{text:'co founder', size: 9},
{text:'first one', size: 9},
{text:'identity politics', size: 9},
{text:'father campaign', size: 9},
{text:'first months', size: 9},
{text:'first major', size: 9},
{text:'protections young', size: 9},
{text:'coast guard', size: 9},
{text:'speaking condition', size: 9},
{text:'first four', size: 9},
{text:'cobb said', size: 9},
{text:'become president', size: 9},
{text:'become partisan', size: 9},
{text:'actions would', size: 9},
{text:'id like', size: 9},
{text:'guide section', size: 9},
{text:'transition team', size: 9},
{text:'company also', size: 9},
{text:'actions mr', size: 9},
{text:'gulf coast', size: 9},
{text:'prosecutor general', size: 9},
{text:'room talk', size: 9},
{text:'sunday afternoon', size: 9},
{text:'maybe even', size: 9},
{text:'ros lehtinen', size: 9},
{text:'anything much', size: 9},
{text:'sunday friday', size: 9},
{text:'according congressional', size: 9},
{text:'first part', size: 9},
{text:'loud clear', size: 9},
{text:'school business', size: 9},
{text:'voiced support', size: 9},
{text:'public attention', size: 9},
{text:'highest level', size: 9},
{text:'visitor logs', size: 9},
{text:'visitor records', size: 9},
{text:'decision made', size: 9},
{text:'school also', size: 9},
{text:'answer question', size: 9},
{text:'took step', size: 9},
{text:'talks north', size: 9},
{text:'supporters opponents', size: 9},
{text:'talks mr', size: 9},
{text:'decision would', size: 9},
{text:'answering questions', size: 9},
{text:'took twitter', size: 9},
{text:'mr colbert', size: 9},
{text:'answers questions', size: 9},
{text:'decisions made', size: 9},
{text:'mr clovis', size: 9},
{text:'vogon jeltz', size: 9},
{text:'anthem protests', size: 9},
{text:'robert lighthizer', size: 9},
{text:'growing number', size: 9},
{text:'strange said', size: 9},
{text:'declared war', size: 9},
{text:'lot said', size: 9},
{text:'opened door', size: 9},
{text:'anti semitism', size: 9},
{text:'receive briefings', size: 9},
{text:'hold president', size: 9},
{text:'general kelly', size: 9},
{text:'domestic political', size: 9},
{text:'new washington', size: 9},
{text:'uncle fred', size: 9},
{text:'going put', size: 9},
{text:'know youre', size: 9},
{text:'staff told', size: 9},
{text:'trying hard', size: 9},
{text:'abbie hoffman', size: 9},
{text:'republicans trump', size: 9},
{text:'perhaps would', size: 9},
{text:'global trade', size: 9},
{text:'would taking', size: 9},
{text:'known deferred', size: 9},
{text:'known dreamers', size: 9},
{text:'trump something', size: 9},
{text:'senator mark', size: 9},
{text:'trying make', size: 9},
{text:'reporting moscow', size: 9},
{text:'today video', size: 9},
{text:'critics mr', size: 9},
{text:'canada mexico', size: 9},
{text:'said simply', size: 9},
{text:'standing next', size: 9},
{text:'going give', size: 9},
{text:'trump threatens', size: 9},
{text:'think ill', size: 9},
{text:'dont care', size: 9},
{text:'nuclear strike', size: 9},
{text:'series page', size: 9},
{text:'stone jr', size: 9},
{text:'cause mr', size: 9},
{text:'investigating whether', size: 9},
{text:'trump tells', size: 9},
{text:'know make', size: 9},
{text:'place start', size: 9},
{text:'republicans like', size: 9},
{text:'trump talk', size: 9},
{text:'nuclear missile', size: 9},
{text:'trump suggested', size: 9},
{text:'campaign would', size: 9},
{text:'times president', size: 9},
{text:'would hold', size: 9},
{text:'trying put', size: 9},
{text:'devastated hurricane', size: 9},
{text:'eastern updated', size: 9},
{text:'said speech', size: 9},
{text:'cant see', size: 9},
{text:'get us', size: 9},
{text:'interview fox', size: 9},
{text:'get work', size: 9},
{text:'staff member', size: 9},
{text:'tuesday evening', size: 9},
{text:'well done', size: 9},
{text:'reporter takes', size: 9},
{text:'percent income', size: 9},
{text:'korea iran', size: 9},
{text:'joint committee', size: 9},
{text:'joined trump', size: 9},
{text:'counsel appointed', size: 9},
{text:'would willing', size: 9},
{text:'would win', size: 9},
{text:'new england', size: 9},
{text:'new energy', size: 9},
{text:'facebook said', size: 9},
{text:'cant get', size: 9},
{text:'staff mr', size: 9},
{text:'state indiana', size: 9},
{text:'global editions', size: 9},
{text:'enforcement administration', size: 9},
{text:'said planned', size: 9},
{text:'isnt said', size: 9},
{text:'new orleans', size: 9},
{text:'would follow', size: 9},
{text:'agreement iran', size: 9},
{text:'jr eric', size: 9},
{text:'person close', size: 9},
{text:'chamber commerce', size: 9},
{text:'enforcement official', size: 9},
{text:'korea could', size: 9},
{text:'military leaders', size: 9},
{text:'would find', size: 9},
{text:'trying work', size: 9},
{text:'times news', size: 9},
{text:'cannot afford', size: 9},
{text:'would use', size: 9},
{text:'remains unclear', size: 9},
{text:'representative tom', size: 9},
{text:'article part', size: 9},
{text:'arthur fenchurch', size: 9},
{text:'ios device', size: 9},
{text:'times since', size: 9},
{text:'arthur couldnt', size: 9},
{text:'centers medicare', size: 9},
{text:'country club', size: 9},
{text:'world powerful', size: 9},
{text:'trump yet', size: 9},
{text:'endorsed mr', size: 9},
{text:'said well', size: 9},
{text:'central bankers', size: 9},
{text:'two members', size: 9},
{text:'week would', size: 9},
{text:'f e', size: 9},
{text:'relationship united', size: 9},
{text:'iphone ipad', size: 9},
{text:'sensitive information', size: 9},
{text:'called trump', size: 9},
{text:'go say', size: 9},
{text:'obama health', size: 9},
{text:'next thing', size: 9},
{text:'nicol maduro', size: 9},
{text:'came trump', size: 9},
{text:'week though', size: 9},
{text:'would one', size: 9},
{text:'two republicans', size: 9},
{text:'environmental groups', size: 9},
{text:'cambridge analytica', size: 9},
{text:'paid insurers', size: 9},
{text:'think president', size: 9},
{text:'came day', size: 9},
{text:'allies mr', size: 9},
{text:'two top', size: 9},
{text:'condolence call', size: 9},
{text:'center right', size: 9},
{text:'republican led', size: 9},
{text:'world never', size: 9},
{text:'document requests', size: 9},
{text:'center stage', size: 9},
{text:'republican colleagues', size: 9},
{text:'asia australia', size: 9},
{text:'week said', size: 9},
{text:'solve problem', size: 9},
{text:'ending daca', size: 9},
{text:'sergey v', size: 9},
{text:'place like', size: 9},
{text:'newsletter sign', size: 9},
{text:'said seen', size: 9},
{text:'abe japan', size: 9},
{text:'fact trump', size: 9},
{text:'number one', size: 9},
{text:'release tax', size: 9},
{text:'would later', size: 9},
{text:'ultimate question', size: 9},
{text:'trump trip', size: 9},
{text:'would let', size: 9},
{text:'energy association', size: 9},
{text:'th president', size: 9},
{text:'critic mr', size: 9},
{text:'said version', size: 9},
{text:'said several', size: 9},
{text:'trump traveled', size: 9},
{text:'nine hundred', size: 9},
{text:'critic president', size: 9},
{text:'would result', size: 9},
{text:'seeing trump', size: 9},
{text:'enemy people', size: 9},
{text:'said wonko', size: 9},
{text:'would made', size: 9},
{text:'said recent', size: 9},
{text:'door open', size: 9},
{text:'said received', size: 9},
{text:'think much', size: 9},
{text:'campaign also', size: 9},
{text:'would really', size: 9},
{text:'papadopoulos emailed', size: 9},
{text:'would receive', size: 9},
{text:'call president', size: 9},
{text:'think think', size: 9},
{text:'asian nations', size: 9},
{text:'trump views', size: 9},
{text:'would longer', size: 9},
{text:'ago said', size: 9},
{text:'night sky', size: 9},
{text:'trump use', size: 9},
{text:'criminal defense', size: 9},
{text:'facebook page', size: 9},
{text:'republicans tuesday', size: 9},
{text:'said robert', size: 9},
{text:'issues said', size: 9},
{text:'african americans', size: 9},
{text:'mention mr', size: 9},
{text:'see deal', size: 9},
{text:'would comment', size: 9},
{text:'change mind', size: 9},
{text:'javad zarif', size: 9},
{text:'trump refusal', size: 9},
{text:'could tell', size: 9},
{text:'wednesday dinner', size: 9},
{text:'thirty seconds', size: 9},
{text:'people voice', size: 9},
{text:'third stroke', size: 9},
{text:'care said', size: 9},
{text:'fulfill promise', size: 9},
{text:'recertify iran', size: 9},
{text:'done said', size: 9},
{text:'rent regulated', size: 9},
{text:'change tone', size: 9},
{text:'new administration', size: 9},
{text:'cuban government', size: 9},
{text:'japanese prime', size: 9},
{text:'janet l', size: 9},
{text:'people serving', size: 9},
{text:'also included', size: 9},
{text:'percent americans', size: 9},
{text:'said today', size: 9},
{text:'people speak', size: 9},
{text:'thing say', size: 9},
{text:'president family', size: 9},
{text:'trump pressed', size: 9},
{text:'bureau chief', size: 9},
{text:'couldnt help', size: 9},
{text:'l yellen', size: 9},
{text:'undue credit', size: 9},
{text:'never going', size: 9},
{text:'people work', size: 9},
{text:'nothing happened', size: 9},
{text:'build new', size: 9},
{text:'hedge fund', size: 9},
{text:'also began', size: 9},
{text:'wednesday afternoon', size: 9},
{text:'plan said', size: 9},
{text:'pharmaceutical industry', size: 9},
{text:'court mr', size: 9},
{text:'self described', size: 9},
{text:'court manhattan', size: 9},
{text:'said new', size: 9},
{text:'kushner mr', size: 9},
{text:'arpaio case', size: 9},
{text:'international monetary', size: 9},
{text:'care mr', size: 9},
{text:'lago visitors', size: 9},
{text:'also looking', size: 9},
{text:'trump plan', size: 9},
{text:'said thanks', size: 9},
{text:'president galaxy', size: 9},
{text:'trump repeated', size: 9},
{text:'peter wehner', size: 9},
{text:'budget director', size: 9},
{text:'weeks mr', size: 9},
{text:'korean war', size: 9},
{text:'red line', size: 9},
{text:'arthur shook', size: 9},
{text:'afghanistan president', size: 9},
{text:'change along', size: 9},
{text:'senate candidate', size: 9},
{text:'asked trump', size: 9},
{text:'afghanistan strategy', size: 9},
{text:'janx spirit', size: 9},
{text:'mr kushner', size: 89},
{text:'arthur dent', size: 88},
{text:'human rights', size: 88},
{text:'washington post', size: 88},
{text:'secret service', size: 87},
{text:'bill clinton', size: 85},
{text:'mr xi', size: 84},
{text:'president vladimir', size: 84},
{text:'chief executive', size: 83},
{text:'air force', size: 83},
{text:'trump told', size: 83},
{text:'law enforcement', size: 83},
{text:'mr pence', size: 83},
{text:'mitch mcconnell', size: 82},
{text:'mr akhmetshin', size: 82},
{text:'north korean', size: 81},
{text:'huckabee sanders', size: 81},
{text:'late night', size: 81},
{text:'john mccain', size: 80},
{text:'sarah huckabee', size: 80},
{text:'health insurance', size: 80},
{text:'wrote twitter', size: 80},
{text:'six months', size: 80},
{text:'mueller iii', size: 80},
{text:'g p', size: 80},
{text:'mr che', size: 8},
{text:'exactly sort', size: 8},
{text:'feinstein california', size: 8},
{text:'open enrollment', size: 8},
{text:'mark landlersept', size: 8},
{text:'five million', size: 8},
{text:'given hope', size: 8},
{text:'first made', size: 8},
{text:'russia said', size: 8},
{text:'released wednesday', size: 8},
{text:'back even', size: 8},
{text:'schiff democrat', size: 8},
{text:'first minutes', size: 8},
{text:'orrin g', size: 8},
{text:'open door', size: 8},
{text:'campaign committee', size: 8},
{text:'honey badger', size: 8},
{text:'would almost', size: 8},
{text:'mr clay', size: 8},
{text:'special agents', size: 8},
{text:'guard corps', size: 8},
{text:'first met', size: 8},
{text:'two companies', size: 8},
{text:'mr benczkowski', size: 8},
{text:'five miles', size: 8},
{text:'russia north', size: 8},
{text:'mark warner', size: 8},
{text:'j mr', size: 8},
{text:'care repeal', size: 8},
{text:'lot worse', size: 8},
{text:'political legal', size: 8},
{text:'started run', size: 8},
{text:'anti abortion', size: 8},
{text:'anti establishment', size: 8},
{text:'time get', size: 8},
{text:'anti magnitsky', size: 8},
{text:'send daughter', size: 8},
{text:'moving away', size: 8},
{text:'anti semitic', size: 8},
{text:'stuck around', size: 8},
{text:'market rate', size: 8},
{text:'commercial real', size: 8},
{text:'democrats congress', size: 8},
{text:'create new', size: 8},
{text:'electricity includes', size: 8},
{text:'declined answer', size: 8},
{text:'five days', size: 8},
{text:'mr bogan', size: 8},
{text:'campaign memoir', size: 8},
{text:'mr bergstrom', size: 8},
{text:'first order', size: 8},
{text:'political operative', size: 8},
{text:'considered firing', size: 8},
{text:'talking said', size: 8},
{text:'signing autographs', size: 8},
{text:'home new', size: 8},
{text:'talking point', size: 8},
{text:'england patriots', size: 8},
{text:'declined say', size: 8},
{text:'try build', size: 8},
{text:'gerald r', size: 8},
{text:'closely watched', size: 8},
{text:'jerome h', size: 8},
{text:'contract price', size: 8},
{text:'feel less', size: 8},
{text:'clinton first', size: 8},
{text:'sign times', size: 8},
{text:'school year', size: 8},
{text:'two others', size: 8},
{text:'mr poe', size: 8},
{text:'mr paul', size: 8},
{text:'public trust', size: 8},
{text:'decided would', size: 8},
{text:'came light', size: 8},
{text:'public statements', size: 8},
{text:'would call', size: 8},
{text:'republican candidates', size: 8},
{text:'mr mulvaney', size: 8},
{text:'senior trump', size: 8},
{text:'jared paul', size: 8},
{text:'kawash richard', size: 8},
{text:'impeachment president', size: 8},
{text:'senior producer', size: 8},
{text:'think people', size: 8},
{text:'look beyond', size: 8},
{text:'democrats said', size: 8},
{text:'looked arthur', size: 8},
{text:'cells convert', size: 8},
{text:'committee oversight', size: 8},
{text:'japan china', size: 8},
{text:'democrats still', size: 8},
{text:'wind turbines', size: 8},
{text:'relations mr', size: 8},
{text:'another example', size: 8},
{text:'nursing home', size: 8},
{text:'political campaigns', size: 8},
{text:'moment donald', size: 8},
{text:'feel good', size: 8},
{text:'decided go', size: 8},
{text:'came defense', size: 8},
{text:'japan south', size: 8},
{text:'republican controlled', size: 8},
{text:'replace mr', size: 8},
{text:'one thirty', size: 8},
{text:'republican congressman', size: 8},
{text:'republican congress', size: 8},
{text:'mr roosevelt', size: 8},
{text:'school high', size: 8},
{text:'possible trump', size: 8},
{text:'providing sanctuary', size: 8},
{text:'group plans', size: 8},
{text:'deductibles high', size: 8},
{text:'moment silence', size: 8},
{text:'would meet', size: 8},
{text:'democrats need', size: 8},
{text:'james higgins', size: 8},
{text:'mr dourson', size: 8},
{text:'court ruling', size: 8},
{text:'immigrants known', size: 8},
{text:'risk mr', size: 8},
{text:'approach would', size: 8},
{text:'group said', size: 8},
{text:'court system', size: 8},
{text:'summit meetings', size: 8},
{text:'pro quo', size: 8},
{text:'pro russian', size: 8},
{text:'york new', size: 8},
{text:'care system', size: 8},
{text:'loosen restrictions', size: 8},
{text:'would look', size: 8},
{text:'different ways', size: 8},
{text:'signed sanctions', size: 8},
{text:'another term', size: 8},
{text:'immigration hard', size: 8},
{text:'another thing', size: 8},
{text:'mr jeffries', size: 8},
{text:'came office', size: 8},
{text:'triadnyc com', size: 8},
{text:'moment moment', size: 8},
{text:'russian counterpart', size: 8},
{text:'katie rogers', size: 8},
{text:'relationship two', size: 8},
{text:'things could', size: 8},
{text:'different trump', size: 8},
{text:'past years', size: 8},
{text:'flag country', size: 8},
{text:'mr goffman', size: 8},
{text:'aiesha dukes', size: 8},
{text:'stories climate', size: 8},
{text:'experience mr', size: 8},
{text:'years jail', size: 8},
{text:'immigration national', size: 8},
{text:'answer session', size: 8},
{text:'hong kong', size: 8},
{text:'six thousand', size: 8},
{text:'democratic votes', size: 8},
{text:'position mr', size: 8},
{text:'elected president', size: 8},
{text:'make point', size: 8},
{text:'trade deficits', size: 8},
{text:'house passed', size: 8},
{text:'trade china', size: 8},
{text:'tillerson mr', size: 8},
{text:'process equal', size: 8},
{text:'get president', size: 8},
{text:'senator charles', size: 8},
{text:'stephen curry', size: 8},
{text:'say one', size: 8},
{text:'low key', size: 8},
{text:'say nothing', size: 8},
{text:'coming days', size: 8},
{text:'dollars source', size: 8},
{text:'program would', size: 8},
{text:'journalists mr', size: 8},
{text:'making point', size: 8},
{text:'glenn thrushsept', size: 8},
{text:'party chairman', size: 8},
{text:'want buy', size: 8},
{text:'malaysian leader', size: 8},
{text:'photo mr', size: 8},
{text:'would force', size: 8},
{text:'house seats', size: 8},
{text:'money trump', size: 8},
{text:'e kasowitz', size: 8},
{text:'majority countries', size: 8},
{text:'stephen wertheim', size: 8},
{text:'trade surplus', size: 8},
{text:'consumer groups', size: 8},
{text:'many voters', size: 8},
{text:'app called', size: 8},
{text:'would given', size: 8},
{text:'candidate president', size: 8},
{text:'many supporters', size: 8},
{text:'say things', size: 8},
{text:'twisted round', size: 8},
{text:'diplomatic properties', size: 8},
{text:'executive vice', size: 8},
{text:'party last', size: 8},
{text:'star system', size: 8},
{text:'john b', size: 8},
{text:'time dangerous', size: 8},
{text:'coming week', size: 8},
{text:'moral authority', size: 8},
{text:'elected republicans', size: 8},
{text:'want everything', size: 8},
{text:'man accused', size: 8},
{text:'john kerry', size: 8},
{text:'yet made', size: 8},
{text:'conspiracy theories', size: 8},
{text:'comey testimony', size: 8},
{text:'war authorization', size: 8},
];