import React from 'react'
import placeholder from '../assets/img/user.png'
import CommonList from './CommonList'
const itemList = [
    {
        "status": "ok",
        "totalResults": 20,
        "articles": [
          {
            "source": {
              "id": null,
              "name": "Financial Times"
            },
            "author": "Nikou Asgari, Arjun Neil Alim, Stephen Morris",
            "title": "Crypto executives fear investor backlash over Trump memecoins - Financial Times",
            "description": "Industry trying to rebuild its reputation frets over potential conflicts of interest and investor losses",
            "url": "https://www.ft.com/content/e6a776da-bd32-41d4-b093-68df8850e448",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F2245f427-3a0f-4313-97d2-8997a6ef6978.jpg?source=next-barrier-page",
            "publishedAt": "2025-01-22T05:00:25Z",
            "content": "FT newspaper delivered Monday-Saturday, plus FT Digital Edition delivered to your device Monday-Saturday.\r\n<ul><li></li>Weekday Print Edition<li></li>FT Weekend<li></li>FT Digital Edition<li>Global n… [+105 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investopedia"
            },
            "author": "Timothy Smith",
            "title": "Watch These Netflix Price Levels as Stock Soars After Strong Q4 Earnings - Investopedia",
            "description": "Netflix shares jumped 14% in extended trading Tuesday after the company's results topped Wall Street expectations. Monitor these key chart levels.",
            "url": "https://www.investopedia.com/watch-these-netflix-price-levels-as-stock-soars-after-strong-q4-earnings-8778249",
            "urlToImage": "https://www.investopedia.com/thmb/uzCTsXpSXXfNj3zapDTpp_1E690=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/NFLXChart-6e0fa6dba39948f5afdfc411eb87a3c0.gif",
            "publishedAt": "2025-01-22T03:02:05Z",
            "content": "<ul><li>Netflix shares jumped in extended trading Tuesday after the streaming giant reported better-than-expected fourth-quarter results and lifted its 2025 revenue outlook.</li><li>Prior to the comp… [+3151 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Stephanie Lai",
            "title": "SoftBank Joins OpenAI, Oracle in AI Pact Unveiled by Trump - Yahoo Finance",
            "description": "(Bloomberg) -- SoftBank Group Corp., OpenAI, and Oracle Corp. are forming a $100 billion joint venture to fund artificial intelligence infrastructure, an...",
            "url": "https://finance.yahoo.com/news/trump-unveils-ai-investment-plan-225351558.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/yvbvaC8MtPbb1.8MPX_OeQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/9ff7d57af56006a7015268167b68e026",
            "publishedAt": "2025-01-22T02:49:00Z",
            "content": "(Bloomberg) -- SoftBank Group Corp., OpenAI, and Oracle Corp. are forming a $100 billion joint venture to fund artificial intelligence infrastructure, an effort unveiled with President Donald Trump a… [+6130 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Kstp.com"
            },
            "author": "Emily Baude",
            "title": "Apple Valley man who went missing after going on pizza delivery last week dies from self-inflicted gunshot wound - KSTP",
            "description": "A man who went missing while delivering pizzas in Apple Valley a week ago has died from a self-inflicted gunshot wound during a mental health crisis.",
            "url": "https://kstp.com/kstp-news/top-news/apple-valley-man-who-went-missing-after-going-on-pizza-delivery-last-week-dies-from-self-inflicted-gunshot-wound/",
            "urlToImage": "https://kstp.com/wp-content/uploads/2025/01/Untitled-2-1.jpg",
            "publishedAt": "2025-01-22T00:41:19Z",
            "content": "A man who went missing while delivering pizzas in Apple Valley a week ago has died from a self-inflicted gunshot wound during a mental health crisis.\r\nShuefaub Xiong, 42, arrived for a shift at the A… [+1803 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Emily Bary",
            "title": "Netflix is raising prices. Here’s how much more your plan will cost. - MarketWatch",
            "description": "Netflix is raising the price of its standard ad-free plan for the first time in three years, though it will still cost less than the comparable version of Hulu",
            "url": "https://www.marketwatch.com/story/netflix-is-raising-prices-heres-how-much-more-your-plan-will-cost-330d9603",
            "urlToImage": "https://images.mktw.net/im-78002145/social",
            "publishedAt": "2025-01-22T00:34:00Z",
            "content": "Netflix Inc. is raising prices again though for some viewers, its actually been some time since the last hike. \r\nThe company announced \r\nalongside its earnings Tuesday afternoon that it will be adjus… [+192 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": null,
            "title": "FDA approves standalone use of J&J’s ketamine-derived depression treatment - CNN",
            "description": "The U.S. Food and Drug Administration expanded approval for Johnson & Johnson’s nasal spray, Spravato, to allow it to be used as a standalone treatment for patients with severe depression, the company said on Tuesday.",
            "url": "https://www.cnn.com/2025/01/21/health/fda-j-and-j-ketamine-derived-depression-treatment-reuters/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/190301163904-esketamine-fda-decision.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2025-01-22T00:11:00Z",
            "content": "The U.S. Food and Drug Administration expanded approval for Johnson &amp; Johnsons nasal spray, Spravato, to allow it to be used as a standalone treatment for patients with severe depression, the com… [+1631 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Aarian Marshall",
            "title": "Trump Says He Ended the ‘EV Mandate.’ What Does That Mean? - WIRED",
            "description": "Policy experts say the implications of Donald Trump’s executive order for EV owners—and the EV-curious—won’t be clear for a while.",
            "url": "https://www.wired.com/story/trump-says-he-ended-the-ev-mandate-what-does-that-mean/",
            "urlToImage": "https://media.wired.com/photos/678ff54e91565a5f08177d49/191:100/w_1280,c_limit/trump-evs-gear-2194320724.jpg",
            "publishedAt": "2025-01-22T00:05:59Z",
            "content": "From the campaign trail, President Donald Trump was consistent: He would end the electric vehicle mandate. So its no surprise the phrase popped up in an executive order he signed on Monday, just hour… [+3185 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Lauren Feiner",
            "title": "Trump says he’s open to Musk or Ellison buying TikTok - The Verge",
            "description": "President Donald Trump said he’s open to billionaire friends Elon Musk or Larry Ellison buying TikTok as part of a joint venture meant to save the app from a ban.",
            "url": "https://www.theverge.com/2025/1/21/24349011/trump-elon-musk-larry-ellison-oracle-tiktok-ban",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/6IjoHeLrDij-euj5asjzkzRik9M=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25406817/STK051_TIKTOK_CVirginia_B.jpg",
            "publishedAt": "2025-01-21T23:44:20Z",
            "content": "Trump says hes open to Musk or Ellison buying TikTok\r\nTrump says hes open to Musk or Ellison buying TikTok\r\n / Sounds like a good deal to me, Mr. President, said the Oracle co-founder.\r\nByLauren Fein… [+2117 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "SFGate"
            },
            "author": "Stephen Council",
            "title": "Stripe, the Bay Area's 2nd-largest tech startup, suddenly lays off 300 workers - SFGATE",
            "description": "Stripe, a fintech juggernaut and the Bay Area's second-most valuable startup, is laying off 300 workers despite \"strong\" business performance.",
            "url": "https://www.sfgate.com/tech/article/bay-area-tech-startup-stripe-lays-off-300-workers-20047821.php",
            "urlToImage": "https://s.hdnux.com/photos/01/46/60/17/26936285/3/rawImage.jpg",
            "publishedAt": "2025-01-21T23:20:56Z",
            "content": "Stripe, headquartered in South San Francisco on Oyster Point Boulevard, told staff on Monday, Jan. 20, 2025, that it was laying off 300 workers.\r\nCourtesy of Google Streetview\r\nStripe, a payments tec… [+3060 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cointelegraph"
            },
            "author": "Big Smokey",
            "title": "Bitcoin holds above $106K as traders bite nails over the absence of Trump crypto executive order - Cointelegraph",
            "description": "Bitcoin price pushed back above $106,000 as traders shook off their disappointment with President Trump’s choice to not issue a crypto-related executive order.",
            "url": "https://cointelegraph.com/news/bitcoin-holds-above-106-k-as-traders-bite-nails-over-the-absence-of-trump-crypto-executive-order",
            "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2025-01/01948ae7-008b-726a-aedd-6e5e7787f529",
            "publishedAt": "2025-01-21T22:27:12Z",
            "content": "Crypto and equities markets roared toward new highs on Jan. 21, with Bitcoin making up the bulk of the ground lost during its pullback the day before. \r\nIn the US, stock markets were closed on Jan. 2… [+3536 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Margaux MacColl",
            "title": "Startup founders flooded inauguration parties hopeful for dealmaking - TechCrunch",
            "description": "All throughout America’s capital, founders enjoyed the fruits of their industry’s political jockeying.",
            "url": "https://techcrunch.com/2025/01/21/startup-founders-flooded-inauguration-parties-hopeful-for-dealmaking/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/01/GettyImages-2194634639.jpg?w=1024",
            "publishedAt": "2025-01-21T21:53:39Z",
            "content": "On Monday, while tech billionaires like Elon Musk and Mark Zuckerberg sat onstage for President Donald Trumps inauguration, dozens of founders were at parties all across Washington, D.C., trying to g… [+4336 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investor's Business Daily"
            },
            "author": null,
            "title": "Stock Market Today: Dow Jones Jumps 538 Points As Trump Stock Dives; Cathie Wood Loads Up On This AI Play Amid 56% Plunge (Live Coverage) - Investor's Business Daily",
            "description": "The Dow Jones rallied on the stock market today. A Donald Trump stock dived while Cathie Wood snapped up a plunging AI stock. Netflix rose.",
            "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-nasdaq-sp500-donald-trump-apple-aapl-stock/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2021/11/Stock-CathieWoods-company.jpg",
            "publishedAt": "2025-01-21T21:11:00Z",
            "content": "Information in Investors Business Daily is for informational and educational purposes only and should not be construed as an offer, recommendation, solicitation, or rating to buy or sell securities. … [+1064 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Thefp.com"
            },
            "author": "Joshua Lachter",
            "title": "It’s Not Just Red Dye No. 3. It’s All Our Stuff. - The FP",
            "description": "We no longer use whale oil for lighting. Why use PFAS to make things nonstick? Time to heed RFK Jr.'s guidance to get healthier items with no forever chemicals.",
            "url": "https://www.thefp.com/p/not-just-red-dye-microplastics-forever-chemicals",
            "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2cfa45b3-d83e-49fd-843e-c202347ff04e_1788x1150.jpeg",
            "publishedAt": "2025-01-21T20:59:45Z",
            "content": "Last week, the Food and Drug Administration banned Red Dye No. 3a coloring found lurking in everything from pastries to pills. Regulators banned it on the grounds that several studies have shown a wo… [+499 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "New York Post"
            },
            "author": "Ariel Zilber",
            "title": "Megyn Kelly rips Lauren Sánchez over her racy outfit at Trump inauguration: ‘No one should be talking about your t-ts’ - New York Post ",
            "description": "The host of the SiriusXM podcast “The Megyn Kelly Show” eviscerated Sánchez, fiancée of Amazon founder Jeff Bezos.",
            "url": "https://nypost.com/2025/01/21/media/megyn-kelly-rips-lauren-sanchez-for-wearing-bra-at-trump-inaugural/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/01/2025-trump-defeated-kamala-harris-97093755.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2025-01-21T20:23:00Z",
            "content": "Megyn Kelly did not mince words when talking about the revealing attire worn by Lauren Sánchez at President Donald Trump’s inauguration in Washington, DC, on Monday.\r\nThe host of the SiriusXM podcast… [+2618 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBC"
            },
            "author": "Yun Li, Jesse Pound",
            "title": "David Einhorn says we have reached the 'Fartcoin' stage of the market cycle - CNBC",
            "description": "\"We have reached the 'Fartcoin' stage of the market cycle,\" Einhorn wrote in an investor letter obtained by CNBC.",
            "url": "https://www.cnbc.com/2025/01/21/david-einhorn-says-we-have-reached-the-fartcoin-stage-of-the-market-cycle.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108062726-1731533385736-IMG_3927.jpg?v=1731533466&w=1920&h=1080",
            "publishedAt": "2025-01-21T19:18:04Z",
            "content": "Greenlight Capital's David Einhorn thinks speculative behavior in the current bull market has ascended to a level beyond common sense.\r\n\"We have reached the 'Fartcoin' stage of the market cycle,\" Ein… [+2262 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Barron's"
            },
            "author": "Barron's",
            "title": "FTAI Stock Plummets in Fallout From Short Seller’s Report. - Barron's",
            "description": null,
            "url": "https://www.barrons.com/articles/ftai-stock-muddy-waters-short-seller-delay-b92363e3",
            "urlToImage": null,
            "publishedAt": "2025-01-21T17:02:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "0.0.1"
            },
            "author": "Charlie Demerjian",
            "title": "Another Suitor Talking To Intel - SemiAccurate",
            "description": "Since SemiAccurate broke the story about Intel being an acquisition target last Friday, there has been a lot of speculation and rumor. While researching the topic we came across, and verified, anot…",
            "url": "https://127.0.0.1/2025/01/21/another-suitor-talking-to-intel/",
            "urlToImage": "https://www.semiaccurate.com/assets/uploads/2017/11/Intel_logo.png",
            "publishedAt": "2025-01-21T12:26:08Z",
            "content": "Since SemiAccurate broke the story about Intel being an acquisition target last Friday, there has been a lot of speculation and rumor. While researching the topic we came across, and verified, anothe… [+1626 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Vox"
            },
            "author": "Eric Levitz",
            "title": "Why Wall Street found Trump’s first day reassuring - Vox.com",
            "description": "Donald Trump declined to enact new tariffs on Inauguration Day. The president’s proposals for steep tariffs on China, Canada, and Mexico had scared Wall Street investors.",
            "url": "https://www.vox.com/politics/395829/trump-tariffs-executive-orders-inauguration-stocks-trade-policy",
            "urlToImage": "https://platform.vox.com/wp-content/uploads/sites/2/2025/01/gettyimages-2194979019.jpg?quality=90&strip=all&crop=0%2C10.736513278159%2C100%2C78.526973443682&w=1200",
            "publishedAt": "2025-01-21T12:00:00Z",
            "content": "Donald Trump has never been on better terms with corporate America. Yet his ostensible trade agenda has never been more antithetical to the interests of big business.\r\nIn recent weeks, tech billionai… [+10199 chars]"
          }
        ]
      }
]
const itemData = itemList.map(e=>(
    e.articles.map(e=> {
        return(
           <tr key={e.source.id}>
            <td><input className="vertical-align" type="checkbox" /></td>
            <td>
                <div className='d-flex align-items-center'>
                    <img src={e.urlToImage ? e.urlToImage : placeholder} className='td_img'/>
                    <div className='ms-5'>
                        <p className='td_text'>{e.author ? e.author : 'Rishav Mishra'}</p>
                        <p className='td_subtext'>{e.source.id ? e.source.id : '00245'}</p>
                    </div>
                </div>
            </td>
            <td>{`${e.content ? e.content.slice(0 , 50) : ''} ...''`}</td>
            <td>{`${e.title ?e.title.slice(0,50) : ''}...`}</td>
            <td>{e.description ? e.description.slice(0, 15) : "No description"}</td>
            <td>{`${e.title ? e.title.slice(0,10) : 'data not find'} ...`}</td>
            <td style={{width: '110px'}} className='text-end'>{`${e.publishedAt ?e.publishedAt.slice(0,10) : ''}`}</td>
           </tr>
        )
    })
))
export default function Item() {
  return (
    <>
       <div className='page-content'>
        <div className='page-content-inner'>
        <p className="main_heding"><span class="text-primary">Item</span> &gt; Add</p>
            <div className='box px-0 min-h-550'>
                <CommonList />
                <div className='px-0 table-responsive' style={{height: '495px'}}>
            <table className='border-collapse-striped px-3'>
                <thead>
                    <tr>
                        <th className='w-50'><input className="vertical-align" type="checkbox" /></th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th className='w-150'>Per Unit Amount</th>
                        <th className='text-end'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {itemData}
                </tbody>
            </table>
            </div>
            </div>
        </div>
       </div>
    </>
  )
}