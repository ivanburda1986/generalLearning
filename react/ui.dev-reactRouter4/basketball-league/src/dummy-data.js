import slug from "slug";

const players = [
  { name: "Tyler McGinnis", position: "Point Guard", teamId: "bulls", number: 33, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-us-west-1.amazonaws.com%2Fudacity-content%2Finstructor%2Ftyler-mcginnis%25402x-2iq0po9.jpg&f=1&nofb=1", rpg: 3, spg: 4, apg: 8, ppg: 12 },
  { name: "Jared Palmer", position: "Shooting Guard", teamId: "bulls", number: 15, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F892351529348411392%2FFLQyLnoc.jpg&f=1&nofb=1", rpg: 5, spg: 2, apg: 4, ppg: 15 },
  { name: "Val Head", position: "Shooting Forward", teamId: "bulls", number: 1, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmilano2019.intersection-conference.eu%2Fsites%2Fdefault%2Ffiles%2F2019-05%2Fdetail-val-head.jpg&f=1&nofb=1", rpg: 6, spg: 2, apg: 3, ppg: 13 },
  { name: "Dan Abramov", position: "Power Forward", teamId: "bulls", number: 99, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*Vko_9kRNbjQGCqyBM9OnVw.jpeg&f=1&nofb=1", rpg: 8, spg: 1, apg: 2, ppg: 10 },
  { name: "Bonnie Eisenman", position: "Center", teamId: "bulls", number: 11, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vuTqoCaPYzbjg_tA7pdoaQAAAA%26pid%3DApi&f=1", rpg: 10, spg: 1, apg: 1, ppg: 10 },
  {
    name: "Kevin Lacker",
    position: "Point Guard",
    teamId: "foxes",
    number: 10,
    avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres-2.cloudinary.com%2Fcrunchbase-production%2Fimage%2Fupload%2Fc_thumb%2Ch_256%2Cw_256%2Cf_auto%2Cg_faces%2Cz_0.7%2Cq_auto%3Aeco%2Fv1397180619%2F4d8549390f2c28b6e61cffb8ce9abf4e.jpg&f=1&nofb=1",
    rpg: 3,
    spg: 4,
    apg: 8,
    ppg: 12,
  },
  { name: "Pete Hunt", position: "Shooting Guard", teamId: "foxes", number: 13, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2013.jsconf.eu%2Fspeakers%2Fimages%2Fpete-hunt.jpg&f=1&nofb=1", rpg: 5, spg: 2, apg: 4, ppg: 15 },
  { name: "Sarah Drasner", position: "Shooting Forward", teamId: "foxes", number: 21, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQNfKyEsfeAU%2Fmaxresdefault.jpg&f=1&nofb=1", rpg: 6, spg: 2, apg: 3, ppg: 13 },
  { name: "Jed Watson", position: "Power Forward", teamId: "foxes", number: 22, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvpa.uncg.edu%2Fwp-content%2Fuploads%2F2020%2F10%2Fjed-watson-headshot-883x1024.jpg&f=1&nofb=1", rpg: 8, spg: 1, apg: 2, ppg: 10 },
  { name: "Richard Feldman", position: "Center", teamId: "foxes", number: 46, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F635812303342956545%2FFo4RyEgH_400x400.jpg&f=1&nofb=1", rpg: 10, spg: 1, apg: 1, ppg: 10 },
  { name: "Preethi Kasireddy", position: "Point Guard", teamId: "hedgehogs", number: 32, avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feveripedia-storage.s3.amazonaws.com%2FProfilePics%2Fpreethi-kasireddy__58468.jpeg&f=1&nofb=1", rpg: 3, spg: 4, apg: 8, ppg: 12 },
  { name: "Ean Platter", position: "Shooting Guard", teamId: "hedgehogs", number: 10, avatar: "https://avatars.io/twitter/eanplatter", rpg: 5, spg: 2, apg: 4, ppg: 15 },
  { name: "Sunil Pai", position: "Shooting Forward", teamId: "hedgehogs", number: 37, avatar: "https://avatars.io/twitter/threepointone", rpg: 6, spg: 2, apg: 3, ppg: 13 },
  { name: "Pam Selle", position: "Power Forward", teamId: "hedgehogs", number: 76, avatar: "https://avatars.io/twitter/pamasaur", rpg: 8, spg: 1, apg: 2, ppg: 10 },
  { name: "Mateusz Zatorski", position: "Center", teamId: "hedgehogs", number: 23, avatar: "https://avatars.io/twitter/matzatorski", rpg: 10, spg: 1, apg: 1, ppg: 10 },
  { name: "Kyle Mathews", position: "Point Guard", teamId: "lemurs", number: 19, avatar: "https://avatars.io/twitter/kylemathews", rpg: 3, spg: 4, apg: 8, ppg: 12 },
  { name: "Lin Clark", position: "Shooting Guard", teamId: "lemurs", number: 66, avatar: "https://avatars.io/twitter/linclark", rpg: 5, spg: 2, apg: 4, ppg: 15 },
  { name: "Guillermo Rauch", position: "Shooting Forward", teamId: "lemurs", number: 34, avatar: "https://avatars.io/twitter/rauchg", rpg: 6, spg: 2, apg: 3, ppg: 13 },
  { name: "Michael Chan", position: "Power Forward", teamId: "lemurs", number: 14, avatar: "https://avatars.io/twitter/chantastic", rpg: 8, spg: 1, apg: 2, ppg: 10 },
  { name: "Rach Smith", position: "Center", teamId: "lemurs", number: 55, avatar: "https://avatars.io/twitter/rachsmithtweets", rpg: 10, spg: 1, apg: 1, ppg: 10 },
  { name: "Tom Occhino", position: "Point Guard", teamId: "koalas", number: 87, avatar: "https://avatars.io/twitter/tomocchino", rpg: 3, spg: 4, apg: 8, ppg: 12 },
  { name: "Aimee Knight", position: "Shooting Guard", teamId: "koalas", number: 26, avatar: "https://avatars.io/twitter/Aimee_Knight", rpg: 5, spg: 2, apg: 4, ppg: 15 },
  { name: "Brian Holt", position: "Shooting Forward", teamId: "koalas", number: 36, avatar: "https://avatars.io/twitter/holtbt", rpg: 6, spg: 2, apg: 3, ppg: 13 },
  { name: "Sophie Alpert", position: "Power Forward", teamId: "koalas", number: 54, avatar: "https://avatars.io/twitter/sophiebits", rpg: 8, spg: 1, apg: 2, ppg: 10 },
  { name: "Ken Wheeler", position: "Center", teamId: "koalas", number: 69, avatar: "https://avatars.io/twitter/ken_wheeler", rpg: 10, spg: 1, apg: 1, ppg: 10 },
];

const teams = {
  bulls: {
    id: "bulls",
    name: "Bulls",
    wins: 80,
    losses: 2,
    established: 1998,
    coach: "Addy Osmani",
    manager: "Todd Motto",
    championships: [1998, 1999, 2001, 2004, 2005, 2008, 2011, 2013, 2014, 2015],
    players: players.slice(0, 5),
  },
  foxes: {
    id: "foxes",
    name: "Foxes",
    wins: 75,
    losses: 7,
    established: 2000,
    coach: "Rich Harris",
    manager: "Jem Young",
    championships: [2000, 2002, 2009],
    players: players.slice(5, 10),
  },
  hedgehogs: {
    id: "hedgehogs",
    name: "Hedgehogs",
    wins: 72,
    losses: 10,
    established: 2002,
    coach: "Vivian Cromwell",
    manager: "Jafar Husain",
    championships: [2003, 2012],
    players: players.slice(10, 15),
  },
  lemurs: {
    id: "lemurs",
    name: "Lemurs",
    wins: 60,
    losses: 22,
    established: 2004,
    coach: "Paul O’Shannessy",
    manager: "Lee Byron",
    championships: [2007, 2009],
    players: players.slice(15, 20),
  },
  koalas: {
    id: "koalas",
    name: "Koalas",
    wins: 55,
    losses: 27,
    established: 2005,
    coach: "David Nolen",
    manager: "Tereza Sokol",
    championships: [2006, 2009, 2010],
    players: players.slice(20, 25),
  },
};

const articleText = `Quae phasellus? Ullamcorper nunc ad eu tempus nostra, etiam massa, perferendis suscipit interdum, voluptates, tempora leo, nec, dignissim, laudantium diam tortor provident, eum erat, optio lorem rem class volutpat hac, eros per vivamus quisque, mauris incididunt! Quam ornare! Nam posuere metus? Laudantium esse provident nibh iure dolor modi! Voluptatibus porttitor magni nisl? Voluptatem mi, pariatur et nascetur! Hymenaeos maecenas viverra! Dolorum distinctio suspendisse, imperdiet! Aliquip quisquam quod, lacus beatae auctor. Ipsa fringilla! Minim molestie quo? Adipiscing, dui, fermentum excepteur luctus, conubia facilisi voluptatibus unde alias est possimus quibusdam, totam, quos? Recusandae egestas corporis, similique potenti facilisi? Reprehenderit massa voluptatum, asperiores. Eius libero sociosqu cras mollis. Maxime penatibus nascetur praesent eius explicabo, molestie? Deserunt inventore asperiores incididunt, venenatis recusandae potenti doloribus assumenda odit, tempora voluptatem dignissimos suscipit ridiculus, dicta quibusdam consequatur mauris, perspiciatis repellendus aute pede sapien. Blandit fringilla quisque, faucibus! Accusantium quis. Magna eros facere sollicitudin ornare sapiente placeat malesuada tempus hac? Provident inventore dignissim habitant. Per aliquet veritatis. Quasi mattis repellendus dapibus mi! Suscipit labore vulputate quae impedit hymenaeos! Sodales pede optio perferendis? Architecto iusto nullam condimentum ac expedita! Cursus. Natoque eu minim, ut ullam venenatis, varius dignissimos per! Scelerisque. Platea ut nec convallis mauris. Optio laudantium tristique cursus. Quibusdam, vero quod culpa magnam magna consectetur maiores quisque blandit sunt ab viverra commodo hic aliquam morbi cumque! Officia netus blandit laboriosam tortor ex lectus, fames habitant similique, ex convallis, blandit neque. Quidem dignissim ridiculus, ipsa, vero eum non class nostrum labore? Class dis nesciunt, pellentesque iure facilisi, error placerat aliquet semper? Commodo ultrices? Id habitant congue ratione nascetur phasellus itaque pariatur dignissim, similique pariatur, fugiat! Tincidunt dolore ullamco quo, beatae deserunt nesciunt posuere deserunt scelerisque proin, dignissimos, nesciunt enim! Ut, inventore quibusdam dicta? Habitasse cupidatat quaerat porttitor neque optio! Gravida? Minima! Fugit? Eius deserunt ullamcorper? Iure eos, tincidunt? Exercitation. Fugiat reiciendis quos mus, fugiat, consequat? Aenean beatae aliquam lectus tempor habitant quibusdam ipsam aliquet venenatis. Sapien ullam venenatis cupiditate nobis cursus ratione litora? Mollitia odit tenetur scelerisque, excepteur facilisi? Porro maecenas molestiae per, quasi, litora, tincidunt numquam mattis laborum! Lacus urna ligula. Natus litora. Viverra odit exercitation ad convallis sociis minima. Tincidunt ullamco! Sagittis qui, inventore ratione fuga eaque, beatae eu integer, maiores, eius similique sodales interdum mus distinctio vitae labore est earum sequi, dictum? Condimentum veniam! Atque minim! Voluptatibus donec dolorem temporibus. Metus ducimus feugiat tempore! Optio aliqua lacinia morbi pulvinar mollis laboriosam fames, ante eveniet harum, facere.`;

const articleInfo = [
  { title: "close out big game", date: new Date(2018, 0, 1) },
  { title: "fall into late slump", date: new Date(2017, 11, 29) },
  { title: "lose key player", date: new Date(2017, 11, 15) },
  { title: "heating up in October", date: new Date(2017, 11, 11) },
  { title: "continue to get worse", date: new Date(2017, 11, 3) },
  { title: "lose. Again.", date: new Date(2017, 10, 19) },
  { title: "get free agent for cheap", date: new Date(2017, 10, 11) },
  { title: "off to great start", date: new Date(2017, 9, 12) },
  { title: "lose another to injury", date: new Date(2017, 9, 5) },
  { title: "worst case scenario", date: new Date(2017, 8, 4) },
  { title: "defy all odds", date: new Date(2017, 7, 29) },
  { title: "are young but determined", date: new Date(2017, 6, 11) },
  { title: "keep the streak alive", date: new Date(2017, 5, 14) },
  { title: "have eye on the prize", date: new Date(2017, 6, 6) },
  { title: "are all washed up", date: new Date(2017, 5, 4) },
];

function generateTitle(teamId, index) {
  return teamId[0].toUpperCase() + teamId.slice(1) + " " + articleInfo[index].title;
}

export function generateArticle(teamId, articleId) {
  const index = articleInfo.map((info, index) => slug(generateTitle(teamId, index))).indexOf(articleId);

  const title = generateTitle(teamId, index);

  return {
    id: slug(title),
    body: articleText,
    title,
    date: articleInfo[index].date,
  };
}

export function generateTeamsArticles(teamId) {
  return articleInfo.map(({ title, date }, index) => {
    const updatedTitle = generateTitle(teamId, index);
    return {
      date,
      title: updatedTitle,
      id: slug(updatedTitle),
    };
  });
}

export { teams, players };
