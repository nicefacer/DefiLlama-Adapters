const { getUniTVL, sumTokensExport } = require('../helper/unknownTokens')
const AmphoraProtocolToken = "0x943c5F4F54509d1e78B1fCD93B92c43ce83d3141";
const USDA = "0xD842D9651F69cEBc0b2Cffc291fC3D3Fe7b5D226";
const wUSDA = "0x43833f0C2025dFA80b5556574FAA11CBf7F3f4eB";
const snxUSD = "0xb2F30A7C980f052f02563fb518dcc39e6bf38175";
const ThreeSPool = "0x5ec58c7def28e0c2470cb8bd7ab9c4ebed0a86b7";

const dexTVL = getUniTVL({ factory: ThreeSPool,  useDefaultCoreAssets: true, })


module.exports = {
    misrepresentedTokens: true,
    methodology: `Uses factory(${ThreeSPool}) address to find and price Liquidity Pool pairs.`,
    ethereum: {
        tvl: dexTVL,
        staking: sumTokensExport({
            owners: [AmphoraProtocolToken],
            tokens: [AmphoraProtocolToken],
        })
    }
}; 
