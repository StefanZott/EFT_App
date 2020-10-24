import React from 'react';
import { Image , View } from 'react-native';

export default function getImage(name , style) {
  
    
      switch (name) {
/* ----------------provisions------------------------------------------------------------------------------------------------- */
        case '"Fierce Hatchling" moonshine':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/Fierce_Hatchling_moonshine.png')}
                    />
                  </View>
        
        case 'Alyonka chocolate bar':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/alyonka.png')}
                    />
                  </View>

        case 'Apple juice':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/appleJuice.png')}
                    />
                  </View>

        case 'Army crackers':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/crackers.png')}
                    />
                  </View>

        case 'Condensed milk':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/milk.png')}
                    />
                  </View>

        case 'Slickers bar':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/slickers.png')}
                    />
                  </View>

        case 'Pack of sugar':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/sugar.png')}
                    />
                  </View>

        case 'Can of Pacific':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/saury.png')}
                    />
                  </View>

        case 'Rye croutons':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/croutons.png')}
                    />
                  </View>

        case 'Emelya rye croutons':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/emeyla.png')}
                    />
                  </View>

        case 'Humpback salmon':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/humpback.png')}
                    />
                  </View>

        case 'Can of green peas':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/peas.png')}
                    />
                  </View>

        case 'Can of delicious beef stew':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/bigTushonka.png')}
                    />
                  </View>

        case 'Can of beef stew':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/smallTushonka.png')}
                    />
                  </View>

        case 'Pack of oat flakes':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/oatflakes.png')}
                    />
                  </View>

        case 'Can of herring':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/herring.png')}
                    />
                  </View>

        case 'Squash spread':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/squash.png')}
                    />
                  </View>
                
        case 'Iskra lunch box':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/lunchbox.png')}
                    />
                  </View>

        case 'MRE lunch box':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/mre.png')}
                    />
                  </View>

        case '0.6L water bottle':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/water.png')}
                    />
                  </View>

        case 'Water bottle with a filter Aquamari':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/aquamari.png')}
                    />
                  </View>

        case 'Russian Army pineapple juice':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/pineapple.png')}
                    />
                  </View>

        case 'Green Ice':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/greenTea.png')}
                    />
                  </View>
        
        case 'Apple juice':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/appleJuice.png')}
                    />
                  </View>

        case 'Grand juice':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/grandJuice.png')}
                    />
                  </View>

        case 'Max energy':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/nrg.png')}
                    />
                  </View>

        case 'TarCola':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/tarCola.png')}
                    />
                  </View>

        case 'Pack of milk':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/milk.png')}
                    />
                  </View>

        case 'Hot Rod':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/hotRod.png')}
                    />
                  </View>

        case 'Jar of DevilDog mayo':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/mayo.png')}
                    />
                  </View>

        case 'Can of sprats':
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/sprats.png')}
                    />
                  </View>

        case 'Purified water':
          return <View style={style.contentDetailTop , {height: style.image127x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/superwater.png')}
                    />
                  </View>

        case 'Bottle of vodka Tarkovskaya':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/vodka.png')}
                    />
                  </View>

        case 'Bottle of Dan Jackiel Whiskey':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/provisions/whisky.png')}
                    />
                  </View>

/* ----------------Backpacks------------------------------------------------------------------------------------------------- */
        case '6SH118 raid backpack':
          return <View style={style.contentDetailTop , {height: style.image250x292.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/6SH118_Icon.png')}
                    />
                  </View> 

        case 'Mystery Ranch Blackjack 50 backpack (multicam)':
          return <View style={style.contentDetailTop , {height: style.image250x350.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Mystery_Ranch_Blackjack_50_backpack_icon.png')}
                    />
                  </View> 

        case 'SSO \"Attack 2\" raid backpack':
          return <View style={style.contentDetailTop , {height: style.image250x350.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/AttackInventory.png')}
                    />
                  </View>

        case 'Pilgrim tourist backpack':
          return <View style={style.contentDetailTop , {height: style.image250x350.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Pilgrim_Backpack.png')}
                    />
                  </View>

        case "3V H Paratus 3-Day Operator's Tactical Backpack":
          return <View style={style.contentDetailTop , {height: style.image250x350.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/3V_G_Paratus.png')}
                    />
                  </View>

        case "LBT-2670 Slim Fiels Med Pack":
          return <View style={style.contentDetailTop , {height: style.image250x312.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/LBT-2670.png')}
                    />
                  </View>

        case "Oakley Machanism heavy duty backpack (black)":
          return <View style={style.contentDetailTop , {height: style.image250x250.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Oakley_Mechanism.png')}
                    />
                  </View>

        case "Camelbak Tri-Zip Backpack":
          return <View style={style.contentDetailTop , {height: style.image250x300.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Tri-Zip_Backpack.png')}
                    />
                  </View>

        case "Ana tactical Beta 2 battle backpack":
          return <View style={style.contentDetailTop , {height: style.image250x250.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Beta2_outside.png')}
                    />
                  </View>

        case "Wartech Berkut VV-102 backpack":
          return <View style={style.contentDetailTop , {height: style.image250x312.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Wartech_Berkut_VV-102_backpack.png')}
                    />
                  </View>

        case "LBT-8005A Day Pack backpack":
          return <View style={style.contentDetailTop , {height: style.image180x225.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Day_pack.png')}
                    />
                  </View>

        case "Scav Backpack":
          return <View style={style.contentDetailTop , {height: style.image250x312.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/ScavBP.png')}
                    />
                  </View>

        case "Flyye MBSS Backpack":
          return <View style={style.contentDetailTop , {height: style.image250x250.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Flyye_MBSS_Backpack.png')}
                    />
                  </View>

        case "Sanitar bag":
          return <View style={style.contentDetailTop , {height: style.image250x250.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Sanitar_Bag.png')}
                    />
                  </View>

        case "Dufle bag":
          return <View style={style.contentDetailTop , {height: style.image250x188.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Duffel_icon.png')}
                    />
                  </View>
        
        case "Transformer":
          return <View style={style.contentDetailTop , {height: style.image190x190.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/T-Bag.png')}
                    />
                  </View>
        
        case "VKBO army bag":
          return <View style={style.contentDetailTop , {height: style.image190x253.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Armybag.png')}
                    />
                  </View>
        
        case "Tactical sling bag":
          return <View style={style.contentDetailTop , {height: style.image105x105.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/SlingBackPackIcon.png')}
                    />
                  </View>

/* ----------------conatiners------------------------------------------------------------------------------------------------- */
        case "Lucky Scav Junkbox":
          return <View style={style.contentDetailTop , {height: style.image250x250.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/lucky.png')}
                    />
                  </View>
        
        case "T H I C C Items Case":
          return <View style={style.contentDetailTop , {height: style.image250x150.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/thicc.png')}
                    />
                  </View>
        
        case "Items Case":
          return <View style={style.contentDetailTop , {height: style.image250x250.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/icase.png')}
                    />
                  </View>
        
        case "T H I C C Weapon Case":
          return <View style={style.contentDetailTop , {height: style.image250x100.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/thiccWeaponCase.png')}
                    />
                  </View>

        case "Weapon Case":
          return <View style={style.contentDetailTop , {height: style.image250x100.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/weaponCase.png')}
                    />
                  </View>
        
        case "Meds case":
          return <View style={style.contentDetailTop , {height: style.image190x190.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/medsCase.png')}
                    />
                  </View>
        
        case "Grenade case":
          return <View style={style.contentDetailTop , {height: style.image190x190.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/grenadeCase.png')}
                    />
                  </View>
        
        case "Mr. Holodilnick thermobag":
          return <View style={style.contentDetailTop , {height: style.image190x190.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/thermobag.png')}
                    />
                  </View>
        
        case "Magazine case":
          return <View style={style.contentDetailTop , {height: style.image190x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/magbox.png')}
                    />
                  </View>
        
        case "Ammo case":
          return <View style={style.contentDetailTop , {height: style.image127x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/ammoCase.png')}
                    />
                  </View>
        
        case "Money case":
          return <View style={style.contentDetailTop , {height: style.image190x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/moneyCase.png')}
                    />
                  </View>
        
        case "Pistol case":
          return <View style={style.contentDetailTop , {height: style.image127x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/pistolCase.png')}
                    />
                  </View>

        case "Documents case ":
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/documentCase.png')}
                    />
                  </View>
        
        case "Small S I C C case":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/smallSicc.png')}
                    />
                  </View>

        case "Keytool":
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Keybar.png')}
                    />
                  </View>
        
        case "Wallet":
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Wallet.png')}
                    />
                  </View>
        
        case "Dogtag case":
          return <View style={style.contentDetailTop , {height: style.image64x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/DogtagCase.png')}
                    />
                  </View>

/* ----------------eyewears------------------------------------------------------------------------------------------------- */
        case "Tactical glasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Tactical_Glasses.png')}
                    />
                  </View>
        
        case "Anti-Fragmentation glasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Anti-fragmentation_goggles.png')}
                    />
                  </View>
        
        case "6B34 Anti-Fragmentation glasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/6b34_glasses.png')}
                    />
                  </View>
        
        case "Round frame sunglasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Round_frame_sunglasses.png')}
                    />
                  </View>
        
        case "Dundukk sport sundglasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Dundukk_sport_sunglasses.png')}
                    />
                  </View>
        
        case "SI M frame safety glasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/SIMcion.png')}
                    />
                  </View>
        
        case "Pyramex Proximity safety glasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Pyramexicon.png')}
                    />
                  </View>
        
        case "RayBench Aviator glasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/RayBench_Hipster_Reserve_Sunglasses.png')}
                    />
                  </View>
        
        case "Crossbow tactical glasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Crossbow_tactical_glasses.png')}
                    />
                  </View>
        
        case "Gascan glasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Gascan_glasses.png')}
                    />
                  </View>
        
        case "Special Twitch Rivals 2020 glasses":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Twitch-2020-Glasses.png')}
                    />
                  </View>

/* ----------------headsets------------------------------------------------------------------------------------------------- */
        case "Ops-Core FAST RAC Headset":
          return <View style={style.contentDetailTop , {height: style.image127x64.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Rac.png')}
                    />
                  </View>
        
        case "Peltor ComTac 2 Headset":
          return <View style={style.contentDetailTop , {height: style.image127x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/comtac.png')}
                    />
                  </View>
        
        case "MSA Sordin Supreme PRO-X/L active Headphone":
          return <View style={style.contentDetailTop , {height: style.image127x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Sordin.png')}
                    />
                  </View>
        
        case "GSSH-01 active Headset":
          return <View style={style.contentDetailTop , {height: style.image127x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/gssh.png')}
                    />
                  </View>
        
        case "Peltor Tactical Sport Headset":
          return <View style={style.contentDetailTop , {height: style.image127x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/tacticalSport.png')}
                    />
                  </View>
        
        case "Walker's Razor Digital Headset":
          return <View style={style.contentDetailTop , {height: style.image127x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/razor.png')}
                    />
                  </View>
/* ----------------secure_containers------------------------------------------------------------------------------------------------- */
        case "Secure Container Kappa":
          return <View style={style.contentDetailTop , {height: style.image190x190.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Kappa.png')}
                    />
                  </View>
        
        case "Secure Container Gamma":
          return <View style={style.contentDetailTop , {height: style.image190x190.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Secure_Gamma_Container.png')}
                    />
                  </View>
        
        case "Secure Container Epsilon":
          return <View style={style.contentDetailTop , {height: style.image253x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Epsilon.png')}
                    />
                  </View>
        
        case "Secure Container Beta":
          return <View style={style.contentDetailTop , {height: style.image190x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Beta.png')}
                    />
                  </View>
        
        case "Secure Container Alpha":
          return <View style={style.contentDetailTop , {height: style.image127x127.height}}>
                    <Image
                      source={require('../assets/images/itemImage/backpack/Secure_container_Alpha.png')}
                    />
                  </View>
/* ----------------default------------------------------------------------------------------------------------------------- */
        default:
          return <View style={style.contentDetailTop , {height: style.mageUnkown.height}}>
                    <Image
                      source={require('../assets/images/itemImage/unknown.png')}
                    />
                  </View>
      }
  }