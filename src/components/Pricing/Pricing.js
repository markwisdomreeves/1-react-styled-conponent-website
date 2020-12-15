import React from 'react';
import { Button } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import { 
    GiMoneyStack,
    GiReceiveMoney,
    GiTakeMyMoney, 
} from "react-icons/gi";
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeaturesUL,
    PricingCardFeatureLI
} from "./Pricing.elements";


function Pricing() {
    return (
        <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Our Services</PricingHeading>

                    <PricingContainer>
                        <PricingCard to="/sign-up">
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiMoneyStack />
                                </PricingCardIcon>
                                <PricingCardPlan>Starter Pack</PricingCardPlan>
                                <PricingCardCost>$99.99</PricingCardCost>
                                <PricingCardLength>Per month</PricingCardLength>
                                
                                <PricingCardFeaturesUL>
                                    <PricingCardFeatureLI>100 New Users</PricingCardFeatureLI>
                                    <PricingCardFeatureLI>50, 000 Budget</PricingCardFeatureLI>
                                    <PricingCardFeatureLI>Re-targeting Analytics</PricingCardFeatureLI>
                                </PricingCardFeaturesUL>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>

                        <PricingCard to="/sign-up">
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiReceiveMoney />
                                </PricingCardIcon>
                                <PricingCardPlan>Gold Rush</PricingCardPlan>
                                <PricingCardCost>$400.11</PricingCardCost>
                                <PricingCardLength>Per month</PricingCardLength>
                                
                                <PricingCardFeaturesUL>
                                    <PricingCardFeatureLI>1000 New Users</PricingCardFeatureLI>
                                    <PricingCardFeatureLI>70, 000 Budget</PricingCardFeatureLI>
                                    <PricingCardFeatureLI>Lead Gen Analytics</PricingCardFeatureLI>
                                </PricingCardFeaturesUL>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>

                        <PricingCard to="/sign-up">
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiTakeMyMoney />
                                </PricingCardIcon>
                                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                                <PricingCardCost>$700.14</PricingCardCost>
                                <PricingCardLength>Per month</PricingCardLength>
                                
                                <PricingCardFeaturesUL>
                                    <PricingCardFeatureLI>Unlimited Users</PricingCardFeatureLI>
                                    <PricingCardFeatureLI>Unlimited Budget</PricingCardFeatureLI>
                                    <PricingCardFeatureLI>24/7 Support</PricingCardFeatureLI>
                                </PricingCardFeaturesUL>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>

                    </PricingContainer>

                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}



export default Pricing;
