import { Box, Flex, Stack, Image, Text, Spacer, Divider, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

type Member = {
    name: string;
    email: string;
    isLeader: boolean;
};

type MembersListProps = {
    members: Member[];
};

const MembersList: React.FC<MembersListProps> = ({ members }) => {

    const [isLargerThan410] = useMediaQuery("(min-width: 410px)");

    return (
        <Flex>
            <Stack direction="column" w="100%">
                {members.map((user, index) => (
                    <React.Fragment key={index}>
                        <Stack mt="20px" mb="24px" direction="row" spacing={0} align="center">
                            {user.isLeader ? (<svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="24" r="21" fill="#5134A4" />
                                <path d="M21 22C23.2091 22 25 20.2091 25 18C25 15.7909 23.2091 14 21 14C18.7909 14 17 15.7909 17 18C17 20.2091 18.7909 22 21 22Z" fill="#06081A" />
                                <path d="M29 29.5C29 31.985 29 34 21 34C13 34 13 31.985 13 29.5C13 27.015 16.582 25 21 25C25.418 25 29 27.015 29 29.5Z" fill="#06081A" />
                                <circle cx="37.5" cy="8.5" r="7.5" fill="#FFC700" stroke="black" stroke-width="2" />
                                <path d="M38.3182 5.77816C38.3182 5.98425 38.2339 6.17169 38.096 6.3109L39.1905 8.19419C39.2051 8.2116 39.2255 8.22372 39.2484 8.22853C39.2712 8.23335 39.2951 8.23056 39.3161 8.22064L40.3793 7.09719C40.3559 6.98437 40.359 6.86802 40.3885 6.75649C40.4179 6.64495 40.473 6.541 40.5497 6.45209C40.6264 6.36318 40.7229 6.29151 40.8322 6.24222C40.9415 6.19294 41.061 6.16725 41.1819 6.16702C41.3831 6.16706 41.5772 6.23753 41.7271 6.36496C41.8771 6.4924 41.9724 6.66788 41.9949 6.85788C42.0173 7.04788 41.9654 7.23909 41.8489 7.39499C41.7325 7.55089 41.5597 7.66055 41.3636 7.70304L40.6256 11.4451C40.5947 11.6011 40.5075 11.7419 40.3791 11.8432C40.2506 11.9445 40.0888 12 39.9219 12H35.078C34.9111 12 34.7494 11.9445 34.6209 11.8432C34.4924 11.7419 34.4052 11.6011 34.3744 11.4451L33.6363 7.70304C33.4795 7.66905 33.3367 7.59186 33.2257 7.48113C33.1148 7.3704 33.0406 7.23104 33.0126 7.08047C32.9845 6.92991 33.0037 6.77482 33.0679 6.63459C33.132 6.49437 33.2383 6.37523 33.3733 6.29208C33.5083 6.20892 33.6661 6.16545 33.827 6.16708C33.9878 6.16871 34.1446 6.21538 34.2777 6.30126C34.4108 6.38713 34.5144 6.5084 34.5753 6.64989C34.6363 6.79139 34.6521 6.94683 34.6207 7.0968L35.7277 8.22266C35.7486 8.23258 35.7725 8.23537 35.7954 8.23056C35.8182 8.22575 35.8387 8.21362 35.8532 8.19622L36.9039 6.31051C36.8124 6.21806 36.7462 6.10574 36.7109 5.98335C36.6756 5.86096 36.6723 5.73222 36.7014 5.60836C36.7305 5.4845 36.791 5.36929 36.8777 5.27277C36.9644 5.17625 37.0746 5.10136 37.1987 5.05463C37.3228 5.00791 37.4571 4.99077 37.5898 5.0047C37.7225 5.01864 37.8496 5.06323 37.96 5.13459C38.0704 5.20595 38.1608 5.3019 38.2232 5.41408C38.2857 5.52625 38.3183 5.65125 38.3182 5.77816Z" fill="#06081A" />
                            </svg>) : (<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="21" r="21" fill="#5134A4" />
                                <path d="M21 19C23.2091 19 25 17.2091 25 15C25 12.7909 23.2091 11 21 11C18.7909 11 17 12.7909 17 15C17 17.2091 18.7909 19 21 19Z" fill="#06081A" />
                                <path d="M29 26.5C29 28.985 29 31 21 31C13 31 13 28.985 13 26.5C13 24.015 16.582 22 21 22C25.418 22 29 24.015 29 26.5Z" fill="#06081A" />
                            </svg>
                            )
                            }
                            {/* <Image src={user.isLeader ? '/icons/leader.svg' : '/icons/person.svg'} boxSize="40px" /> */}
                            <Stack ml="20px" direction="column" spacing={0} flex="1">
                                <Text fontSize="1rem" fontWeight="500" color="white">
                                    {user.name}
                                </Text>
                                <Text fontSize="1rem" fontWeight="500" color="#626581" textDecoration="underline">
                                    {user.email}
                                </Text>
                            </Stack>
                            <Spacer />
                            {user.isLeader && isLargerThan410 && (
                                <Text fontSize="1rem" fontWeight="semibold" color="white">
                                    LEADER
                                </Text>
                            )}
                        </Stack>
                        <Divider borderColor="#5134A4" />
                    </React.Fragment>
                ))}
            </Stack>
        </Flex>
    );
};

export default MembersList;
