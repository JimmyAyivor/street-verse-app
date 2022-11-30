import React from 'react'

export default function Faq() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 mt-[80px] mb-[10px]">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl pt-[60px] font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <p className="p-2 text-lg font-medium tracking-wider text-center uppercase">
            General
          </p>
          <details>
            <summary className="py-2 font-bold  outline-none cursor-pointer focus:underline">
              What is StreetVerse?
            </summary>
            <div className="px-4 pb-4">
              <p>
                StreetVerse is the world’s premier global NFT streetwear club.
                We are a community built by fashion lovers, founded to celebrate
                the authenticity and diversity of streetwear culture. Our
                members will have access to a world of premier releases and
                events, exclusive access to the latest drops, and an elite
                community of like-minded enthusiasts and experts - not to
                mention some of the most interesting designers on the planet.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              What is a Non-fungible-Token (NFT)?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Think of two $100 bills. It doesn’t matter which one you use to
                buy your designer shirt - the shop will take either, because
                they are interchangeable. That’s what makes banknotes
                ‘fungible’. ETH or Bitcoin are also examples of fungible tokens.
                A Non-Fungible Token (NFT) is different because it’s
                non-interchangeable. Each one is unique, like a one-of-a-kind
                trading card or ultra-rare pair of Jordans. Through the use of
                blockchain technology, NFTs are able to establish verified and
                public proof that the digital or real-world assets they are
                connected to are original and authentic.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              Are NFTs bad for the environment?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                StreetVerse is committed to employing the most environmentally
                friendly blockchain technology. Currently, we are using the
                Polygon blockchain for all of our Digital NFTs. Polygon's PoS
                validators "consume electricity energy which is multiple orders
                of magnitude below PoW-based blockchain miners and that
                translates to more eco-friendliness and considerably fewer
                carbon emissions. Unlike other systems, over time, it can be
                reasonably predicted that with technical improvements in node
                technology, our validators will become more efficient in both
                validating transactions and consuming electricity accordingly."
                Read more about Polygon's environmental practices{" "}
                <a
                  className="text-red-500 text-decoration-line: underline"
                  href="https://blog.polygon.technology/polygon-the-eco-friendly-blockchain-scaling-ethereum-bbdd52201ad/"
                >
                  here.
                </a>
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              Why use NFTs for StreetVerse?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                An NFT is a simple and automatically generated contract. It is
                low cost, efficient, easily transferable, and fun. As an NFT,
                your membership is an asset which can later be sold or
                transferred to others on the secondary market. By utilizing
                NFT's, StreetVerse is able to create a loyal, member-community
                for whom we can provide unrivaled experiences.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              What is ETH and how do I get it?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                ETH (currency symbol Ξ) is the cryptocurrency of the Ethereum
                blockchain. Cryptocurrencies are not available for purchase
                through banks or online brokerages. Instead, they are purchased
                and traded online through crypto-specific trading platforms.
                You’ll need to choose one of these exchange platforms to fund
                your account. Once you’ve done that you will be all set to place
                an order for Ethereum. Your new ETH balance will then be stored
                on the exchange until you decide to transfer it to your crypto
                wallet.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              What is a wallet? Why do I need one?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                A crypto wallet is a secure virtual, well… wallet! It is
                accessible online and facilitates the transactions of
                crypto-currencies and other digital assets - like NFTs - between
                owners and end-users.
              </p>
              <p>
                StreetVerse is compatible with most major Web3 wallets including
                Metamask. If you don’t have a wallet yet, you can sign
                up for one through the Metamask website. This wallet will be linked to
                the email or social profile you connect it with, and you’ll be
                able to use it anywhere in Web3 in the future. If you need help
                getting set up we are happy to assist you through your
                StreetVerse account.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              Can I purchase it with US dollars via my credit/debit card?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Our primary launch is in ETH, which means that you will need a
                private crypto wallet to receive your membership token. We are
                developing a path for NFT newbies to purchase the StreetVerse
                membership token using a credit card in USD, but that will only
                be available to our waitlist.
              </p>
            </div>
          </details>
        </div>
      </div>
      <div className="h-[50px]"> </div>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <p className="p-2 text-lg font-medium tracking-wider text-center uppercase">
            Membership
          </p>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              How long does the membership last?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Forever. As an NFT, all StreetVerse membership tokens are
                tradable on the secondary market.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              Why is it worth the money?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                As a StreetVerse member, you’ll have the keys to unlock a world
                of unrivaled fashion experiences, exclusive access to the latest
                culturally-relevant news and developments, and an entire
                community of like-minded enthusiasts and experts - not to
                mention some of the most interesting designers on the planet.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              Is there an age requirement to be a token holder?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p> Yes, all token holders must be at least 21 years of age.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              Why do I need a wallet? Can't I just transfer money from my
              account from a crypto-exchange?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="pb-4">
                {" "}
                Your wallet will be the place where you store your membership
                NFT. When you buy ETH from an exchange (like Coinbase, FTX,
                Gemini or Binance), the ETH is often stored in an account
                balance for you. These account balances may not be set up to
                receive NFTs, but your wallet will do the trick.
              </p>
              <p>
                Once it’s set up, your StreetVerse membership NFT will be
                automatically transferred into your StreetVerse wallet.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              What is the secondary market?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="pb-4">
                Once a person purchases the original token from StreetVerse, all
                future transactions happen on a secondary market, such as
                Opensea.io.
              </p>
              <p>
                OpenSea is the first and largest peer-to-peer marketplace for
                crypto goods (like an eBay for crypto assets), which include
                collectibles, gaming items, and other virtual goods backed by a
                blockchain. On OpenSea, anyone can buy or sell these items
                through a smart contract.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              What happens if the wallet containing my NFTs is compromised or
              goes missing?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                {" "}
                You’re safe with us. We understand that the world of blockchain
                can seem daunting, and we’ve all heard the stories of wallets
                being compromised and their digital contents stolen. Thankfully,
                you won’t have to worry about any of that with us. All
                StreetVerse NFTs are linked to your ID on our end, so if any
                should ever go missing, we can simply destroy the original and
                re-issue you a new one.
              </p>
            </div>
          </details>
        </div>
      </div>
      <div className="h-[50px]"> </div>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <p className="p-2 text-lg font-medium tracking-wider text-center uppercase">
            Acquisition of Events and Merch
          </p>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              Who am I buying from?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Merchandise and Events sold on the StreetVerse platform to
                members are offered directly from brands from which the members
                are a part of.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
              What are the steps for making a purchase?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p> It's very easy! </p>
              <ol className="list-decimal text-sm leading-5 font-serif pl-[40px]">
                <li>You enter StreetVerse website and click ‘Events’.</li>
                <li>You then click on the event you are interested in.</li>
                <li>
                  Choose the event you would like to buy and click purchase.
                </li>
                <li>You are taken to the confirmation page.</li>
                <li>
                  Continue to the payment page, where you are asked to enter
                  your credit card information.
                </li>
                <li>
                  And voilà you should receive an email explaining next steps
                  and the relevant details of your order.
                </li>
              </ol>
              <p>
                In addition to your physical bottle, your digital cellar will be
                immediately updated with your new Digital Cork NFTs where you
                will find rich information attached to your wine to learn more
                in depth and enjoy it.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold  outline-none cursor-pointer focus:underline">
              Can I pay with credit card or crypto currency?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p> You are only able to pay with a credit card at this time.</p>
            </div>
          </details>
        </div>
      </div>
      <div className="h-[80px]"> </div>
    </section>
  );
}




