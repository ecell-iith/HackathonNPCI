import { Box, Button, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Timeline = () => {
    const [active, setActive] = useState<number>(1);

    const handleState = (index: number) => {
        setActive(index);
    }

    const redirectToCalender = (start: Date, end: Date, round: number) => {
        const formatDateToUTCString = (date: Date): string => {
            const year = date.getUTCFullYear();
            const month = String(date.getUTCMonth() + 1).padStart(2, '0');
            const day = String(date.getUTCDate()).padStart(2, '0');
            const hours = String(date.getUTCHours()).padStart(2, '0');
            const minutes = String(date.getUTCMinutes()).padStart(2, '0');
            const seconds = String(date.getUTCSeconds()).padStart(2, '0');
            return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
        };

        const title = `E-Cell Hackathon Round ${round}`;
        const startDate = formatDateToUTCString(start);
        const endDate = formatDateToUTCString(end);
        const description = `Round ${round} will start on ${String(start.getUTCDate()).padStart(2, '0')}-${String(start.getUTCMonth() + 1).padStart(2, '0')}. Stay tuned to our portal hackathon.ecelliith.org`;
        const location = "Online";
        const timeZone = "Asia/Kolkata";

        const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE` +
            `&text=${encodeURIComponent(title)}` +
            `&dates=${startDate}/${endDate}` +
            `&details=${encodeURIComponent(description)}` +
            `&location=${encodeURIComponent(location)}` +
            `&ctz=${encodeURIComponent(timeZone)}`;

        window.open(calendarUrl, '_blank');
    };


    return (
        <>
            <Stack overflowX={"scroll"} whiteSpace={"nowrap"} direction={"row"}>
                <Box _hover={{ cursor: "pointer" }} mr={{ base: "80px", md: "80px", lg: "140px" }} onClick={() => { handleState(1) }}>
                    {active === 1 ? (<svg width="150" height="67" viewBox="0 0 150 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="150" height="53" rx="8" fill="#5134A4" />
                        <path d="M36.6 33.5V19.5H42.06C43.2867 19.5 44.3333 19.6933 45.2 20.08C46.0667 20.4667 46.7333 21.0267 47.2 21.76C47.6667 22.4933 47.9 23.3667 47.9 24.38C47.9 25.3933 47.6667 26.2667 47.2 27C46.7333 27.72 46.0667 28.2733 45.2 28.66C44.3333 29.0467 43.2867 29.24 42.06 29.24H37.7L38.6 28.32V33.5H36.6ZM45.96 33.5L42.4 28.42H44.54L48.14 33.5H45.96ZM38.6 28.52L37.7 27.54H42C43.28 27.54 44.2467 27.2667 44.9 26.72C45.5667 26.16 45.9 25.38 45.9 24.38C45.9 23.38 45.5667 22.6067 44.9 22.06C44.2467 21.5133 43.28 21.24 42 21.24H37.7L38.6 20.24V28.52ZM55.3913 33.62C54.3246 33.62 53.3779 33.3867 52.5513 32.92C51.7246 32.4533 51.0713 31.8133 50.5913 31C50.1113 30.1733 49.8713 29.24 49.8713 28.2C49.8713 27.1467 50.1113 26.2133 50.5913 25.4C51.0713 24.5867 51.7246 23.9533 52.5513 23.5C53.3779 23.0333 54.3246 22.8 55.3913 22.8C56.4446 22.8 57.3846 23.0333 58.2113 23.5C59.0513 23.9533 59.7046 24.5867 60.1713 25.4C60.6513 26.2 60.8913 27.1333 60.8913 28.2C60.8913 29.2533 60.6513 30.1867 60.1713 31C59.7046 31.8133 59.0513 32.4533 58.2113 32.92C57.3846 33.3867 56.4446 33.62 55.3913 33.62ZM55.3913 31.94C56.0713 31.94 56.6779 31.7867 57.2113 31.48C57.7579 31.1733 58.1846 30.74 58.4913 30.18C58.7979 29.6067 58.9513 28.9467 58.9513 28.2C58.9513 27.44 58.7979 26.7867 58.4913 26.24C58.1846 25.68 57.7579 25.2467 57.2113 24.94C56.6779 24.6333 56.0713 24.48 55.3913 24.48C54.7113 24.48 54.1046 24.6333 53.5713 24.94C53.0379 25.2467 52.6113 25.68 52.2913 26.24C51.9713 26.7867 51.8113 27.44 51.8113 28.2C51.8113 28.9467 51.9713 29.6067 52.2913 30.18C52.6113 30.74 53.0379 31.1733 53.5713 31.48C54.1046 31.7867 54.7113 31.94 55.3913 31.94ZM68.0066 33.62C67.0999 33.62 66.2999 33.4533 65.6066 33.12C64.9266 32.7867 64.3932 32.28 64.0066 31.6C63.6332 30.9067 63.4466 30.04 63.4466 29V22.9H65.3666V28.78C65.3666 29.82 65.6132 30.6 66.1066 31.12C66.6132 31.64 67.3199 31.9 68.2266 31.9C68.8932 31.9 69.4732 31.7667 69.9666 31.5C70.4599 31.22 70.8399 30.82 71.1066 30.3C71.3732 29.7667 71.5066 29.1267 71.5066 28.38V22.9H73.4266V33.5H71.6066V30.64L71.9066 31.4C71.5599 32.1067 71.0399 32.6533 70.3466 33.04C69.6532 33.4267 68.8732 33.62 68.0066 33.62ZM82.7417 22.8C83.6084 22.8 84.3684 22.9667 85.0217 23.3C85.6884 23.6333 86.2084 24.14 86.5817 24.82C86.9551 25.5 87.1417 26.36 87.1417 27.4V33.5H85.2217V27.62C85.2217 26.5933 84.9684 25.82 84.4617 25.3C83.9684 24.78 83.2684 24.52 82.3617 24.52C81.6817 24.52 81.0884 24.6533 80.5817 24.92C80.0751 25.1867 79.6817 25.58 79.4017 26.1C79.1351 26.62 79.0017 27.2667 79.0017 28.04V33.5H77.0817V22.9H78.9217V25.76L78.6217 25C78.9684 24.3067 79.5017 23.7667 80.2217 23.38C80.9417 22.9933 81.7817 22.8 82.7417 22.8ZM95.075 33.62C94.0483 33.62 93.1283 33.3933 92.315 32.94C91.515 32.4867 90.8817 31.8533 90.415 31.04C89.9483 30.2267 89.715 29.28 89.715 28.2C89.715 27.12 89.9483 26.18 90.415 25.38C90.8817 24.5667 91.515 23.9333 92.315 23.48C93.1283 23.0267 94.0483 22.8 95.075 22.8C95.9683 22.8 96.775 23 97.495 23.4C98.215 23.8 98.7883 24.4 99.215 25.2C99.655 26 99.875 27 99.875 28.2C99.875 29.4 99.6617 30.4 99.235 31.2C98.8217 32 98.255 32.6067 97.535 33.02C96.815 33.42 95.995 33.62 95.075 33.62ZM95.235 31.94C95.9017 31.94 96.5017 31.7867 97.035 31.48C97.5817 31.1733 98.0083 30.74 98.315 30.18C98.635 29.6067 98.795 28.9467 98.795 28.2C98.795 27.44 98.635 26.7867 98.315 26.24C98.0083 25.68 97.5817 25.2467 97.035 24.94C96.5017 24.6333 95.9017 24.48 95.235 24.48C94.555 24.48 93.9483 24.6333 93.415 24.94C92.8817 25.2467 92.455 25.68 92.135 26.24C91.815 26.7867 91.655 27.44 91.655 28.2C91.655 28.9467 91.815 29.6067 92.135 30.18C92.455 30.74 92.8817 31.1733 93.415 31.48C93.9483 31.7867 94.555 31.94 95.235 31.94ZM98.855 33.5V30.64L98.975 28.18L98.775 25.72V18.66H100.695V33.5H98.855ZM111.199 33.5V20.3L112.059 21.24H108.039V19.5H113.179V33.5H111.199Z" fill="white" />
                        <path d="M73.3307 62.47C74.1211 63.668 75.8789 63.668 76.6693 62.47L83.3459 52.3515C84.2232 51.0218 83.2696 49.25 81.6765 49.25H68.3235C66.7304 49.25 65.7768 51.0218 66.6541 52.3515L73.3307 62.47Z" fill="#5134A4" />
                    </svg>) : (<svg width="150" height="67" viewBox="0 0 150 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="148" height="51" rx="7" stroke="white" stroke-width="2" />
                        <path d="M36.6 33.5V19.5H42.06C43.2867 19.5 44.3333 19.6933 45.2 20.08C46.0667 20.4667 46.7333 21.0267 47.2 21.76C47.6667 22.4933 47.9 23.3667 47.9 24.38C47.9 25.3933 47.6667 26.2667 47.2 27C46.7333 27.72 46.0667 28.2733 45.2 28.66C44.3333 29.0467 43.2867 29.24 42.06 29.24H37.7L38.6 28.32V33.5H36.6ZM45.96 33.5L42.4 28.42H44.54L48.14 33.5H45.96ZM38.6 28.52L37.7 27.54H42C43.28 27.54 44.2467 27.2667 44.9 26.72C45.5667 26.16 45.9 25.38 45.9 24.38C45.9 23.38 45.5667 22.6067 44.9 22.06C44.2467 21.5133 43.28 21.24 42 21.24H37.7L38.6 20.24V28.52ZM55.3913 33.62C54.3246 33.62 53.3779 33.3867 52.5513 32.92C51.7246 32.4533 51.0713 31.8133 50.5913 31C50.1113 30.1733 49.8713 29.24 49.8713 28.2C49.8713 27.1467 50.1113 26.2133 50.5913 25.4C51.0713 24.5867 51.7246 23.9533 52.5513 23.5C53.3779 23.0333 54.3246 22.8 55.3913 22.8C56.4446 22.8 57.3846 23.0333 58.2113 23.5C59.0513 23.9533 59.7046 24.5867 60.1713 25.4C60.6513 26.2 60.8913 27.1333 60.8913 28.2C60.8913 29.2533 60.6513 30.1867 60.1713 31C59.7046 31.8133 59.0513 32.4533 58.2113 32.92C57.3846 33.3867 56.4446 33.62 55.3913 33.62ZM55.3913 31.94C56.0713 31.94 56.6779 31.7867 57.2113 31.48C57.7579 31.1733 58.1846 30.74 58.4913 30.18C58.7979 29.6067 58.9513 28.9467 58.9513 28.2C58.9513 27.44 58.7979 26.7867 58.4913 26.24C58.1846 25.68 57.7579 25.2467 57.2113 24.94C56.6779 24.6333 56.0713 24.48 55.3913 24.48C54.7113 24.48 54.1046 24.6333 53.5713 24.94C53.0379 25.2467 52.6113 25.68 52.2913 26.24C51.9713 26.7867 51.8113 27.44 51.8113 28.2C51.8113 28.9467 51.9713 29.6067 52.2913 30.18C52.6113 30.74 53.0379 31.1733 53.5713 31.48C54.1046 31.7867 54.7113 31.94 55.3913 31.94ZM68.0066 33.62C67.0999 33.62 66.2999 33.4533 65.6066 33.12C64.9266 32.7867 64.3932 32.28 64.0066 31.6C63.6332 30.9067 63.4466 30.04 63.4466 29V22.9H65.3666V28.78C65.3666 29.82 65.6132 30.6 66.1066 31.12C66.6132 31.64 67.3199 31.9 68.2266 31.9C68.8932 31.9 69.4732 31.7667 69.9666 31.5C70.4599 31.22 70.8399 30.82 71.1066 30.3C71.3732 29.7667 71.5066 29.1267 71.5066 28.38V22.9H73.4266V33.5H71.6066V30.64L71.9066 31.4C71.5599 32.1067 71.0399 32.6533 70.3466 33.04C69.6532 33.4267 68.8732 33.62 68.0066 33.62ZM82.7417 22.8C83.6084 22.8 84.3684 22.9667 85.0217 23.3C85.6884 23.6333 86.2084 24.14 86.5817 24.82C86.9551 25.5 87.1417 26.36 87.1417 27.4V33.5H85.2217V27.62C85.2217 26.5933 84.9684 25.82 84.4617 25.3C83.9684 24.78 83.2684 24.52 82.3617 24.52C81.6817 24.52 81.0884 24.6533 80.5817 24.92C80.0751 25.1867 79.6817 25.58 79.4017 26.1C79.1351 26.62 79.0017 27.2667 79.0017 28.04V33.5H77.0817V22.9H78.9217V25.76L78.6217 25C78.9684 24.3067 79.5017 23.7667 80.2217 23.38C80.9417 22.9933 81.7817 22.8 82.7417 22.8ZM95.075 33.62C94.0483 33.62 93.1283 33.3933 92.315 32.94C91.515 32.4867 90.8817 31.8533 90.415 31.04C89.9483 30.2267 89.715 29.28 89.715 28.2C89.715 27.12 89.9483 26.18 90.415 25.38C90.8817 24.5667 91.515 23.9333 92.315 23.48C93.1283 23.0267 94.0483 22.8 95.075 22.8C95.9683 22.8 96.775 23 97.495 23.4C98.215 23.8 98.7883 24.4 99.215 25.2C99.655 26 99.875 27 99.875 28.2C99.875 29.4 99.6617 30.4 99.235 31.2C98.8217 32 98.255 32.6067 97.535 33.02C96.815 33.42 95.995 33.62 95.075 33.62ZM95.235 31.94C95.9017 31.94 96.5017 31.7867 97.035 31.48C97.5817 31.1733 98.0083 30.74 98.315 30.18C98.635 29.6067 98.795 28.9467 98.795 28.2C98.795 27.44 98.635 26.7867 98.315 26.24C98.0083 25.68 97.5817 25.2467 97.035 24.94C96.5017 24.6333 95.9017 24.48 95.235 24.48C94.555 24.48 93.9483 24.6333 93.415 24.94C92.8817 25.2467 92.455 25.68 92.135 26.24C91.815 26.7867 91.655 27.44 91.655 28.2C91.655 28.9467 91.815 29.6067 92.135 30.18C92.455 30.74 92.8817 31.1733 93.415 31.48C93.9483 31.7867 94.555 31.94 95.235 31.94ZM98.855 33.5V30.64L98.975 28.18L98.775 25.72V18.66H100.695V33.5H98.855ZM111.199 33.5V20.3L112.059 21.24H108.039V19.5H113.179V33.5H111.199Z" fill="white" />
                    </svg>
                    )}
                </Box>

                <Box _hover={{ cursor: "pointer" }} mr={{ base: "80px", md: "80px", lg: "140px" }} onClick={() => { handleState(2) }}>
                    {active === 2 ? (<svg width="150" height="67" viewBox="0 0 150 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="150" height="53" rx="8" fill="#5134A4" />
                        <path d="M34.6 33.5V19.5H40.06C41.2867 19.5 42.3333 19.6933 43.2 20.08C44.0667 20.4667 44.7333 21.0267 45.2 21.76C45.6667 22.4933 45.9 23.3667 45.9 24.38C45.9 25.3933 45.6667 26.2667 45.2 27C44.7333 27.72 44.0667 28.2733 43.2 28.66C42.3333 29.0467 41.2867 29.24 40.06 29.24H35.7L36.6 28.32V33.5H34.6ZM43.96 33.5L40.4 28.42H42.54L46.14 33.5H43.96ZM36.6 28.52L35.7 27.54H40C41.28 27.54 42.2467 27.2667 42.9 26.72C43.5667 26.16 43.9 25.38 43.9 24.38C43.9 23.38 43.5667 22.6067 42.9 22.06C42.2467 21.5133 41.28 21.24 40 21.24H35.7L36.6 20.24V28.52ZM53.3913 33.62C52.3246 33.62 51.3779 33.3867 50.5513 32.92C49.7246 32.4533 49.0713 31.8133 48.5913 31C48.1113 30.1733 47.8713 29.24 47.8713 28.2C47.8713 27.1467 48.1113 26.2133 48.5913 25.4C49.0713 24.5867 49.7246 23.9533 50.5513 23.5C51.3779 23.0333 52.3246 22.8 53.3913 22.8C54.4446 22.8 55.3846 23.0333 56.2113 23.5C57.0513 23.9533 57.7046 24.5867 58.1713 25.4C58.6513 26.2 58.8913 27.1333 58.8913 28.2C58.8913 29.2533 58.6513 30.1867 58.1713 31C57.7046 31.8133 57.0513 32.4533 56.2113 32.92C55.3846 33.3867 54.4446 33.62 53.3913 33.62ZM53.3913 31.94C54.0713 31.94 54.6779 31.7867 55.2113 31.48C55.7579 31.1733 56.1846 30.74 56.4913 30.18C56.7979 29.6067 56.9513 28.9467 56.9513 28.2C56.9513 27.44 56.7979 26.7867 56.4913 26.24C56.1846 25.68 55.7579 25.2467 55.2113 24.94C54.6779 24.6333 54.0713 24.48 53.3913 24.48C52.7113 24.48 52.1046 24.6333 51.5713 24.94C51.0379 25.2467 50.6113 25.68 50.2913 26.24C49.9713 26.7867 49.8113 27.44 49.8113 28.2C49.8113 28.9467 49.9713 29.6067 50.2913 30.18C50.6113 30.74 51.0379 31.1733 51.5713 31.48C52.1046 31.7867 52.7113 31.94 53.3913 31.94ZM66.0066 33.62C65.0999 33.62 64.2999 33.4533 63.6066 33.12C62.9266 32.7867 62.3932 32.28 62.0066 31.6C61.6332 30.9067 61.4466 30.04 61.4466 29V22.9H63.3666V28.78C63.3666 29.82 63.6132 30.6 64.1066 31.12C64.6132 31.64 65.3199 31.9 66.2266 31.9C66.8932 31.9 67.4732 31.7667 67.9666 31.5C68.4599 31.22 68.8399 30.82 69.1066 30.3C69.3732 29.7667 69.5066 29.1267 69.5066 28.38V22.9H71.4266V33.5H69.6066V30.64L69.9066 31.4C69.5599 32.1067 69.0399 32.6533 68.3466 33.04C67.6532 33.4267 66.8732 33.62 66.0066 33.62ZM80.7417 22.8C81.6084 22.8 82.3684 22.9667 83.0217 23.3C83.6884 23.6333 84.2084 24.14 84.5817 24.82C84.9551 25.5 85.1417 26.36 85.1417 27.4V33.5H83.2217V27.62C83.2217 26.5933 82.9684 25.82 82.4617 25.3C81.9684 24.78 81.2684 24.52 80.3617 24.52C79.6817 24.52 79.0884 24.6533 78.5817 24.92C78.0751 25.1867 77.6817 25.58 77.4017 26.1C77.1351 26.62 77.0017 27.2667 77.0017 28.04V33.5H75.0817V22.9H76.9217V25.76L76.6217 25C76.9684 24.3067 77.5017 23.7667 78.2217 23.38C78.9417 22.9933 79.7817 22.8 80.7417 22.8ZM93.075 33.62C92.0483 33.62 91.1283 33.3933 90.315 32.94C89.515 32.4867 88.8817 31.8533 88.415 31.04C87.9483 30.2267 87.715 29.28 87.715 28.2C87.715 27.12 87.9483 26.18 88.415 25.38C88.8817 24.5667 89.515 23.9333 90.315 23.48C91.1283 23.0267 92.0483 22.8 93.075 22.8C93.9683 22.8 94.775 23 95.495 23.4C96.215 23.8 96.7883 24.4 97.215 25.2C97.655 26 97.875 27 97.875 28.2C97.875 29.4 97.6617 30.4 97.235 31.2C96.8217 32 96.255 32.6067 95.535 33.02C94.815 33.42 93.995 33.62 93.075 33.62ZM93.235 31.94C93.9017 31.94 94.5017 31.7867 95.035 31.48C95.5817 31.1733 96.0083 30.74 96.315 30.18C96.635 29.6067 96.795 28.9467 96.795 28.2C96.795 27.44 96.635 26.7867 96.315 26.24C96.0083 25.68 95.5817 25.2467 95.035 24.94C94.5017 24.6333 93.9017 24.48 93.235 24.48C92.555 24.48 91.9483 24.6333 91.415 24.94C90.8817 25.2467 90.455 25.68 90.135 26.24C89.815 26.7867 89.655 27.44 89.655 28.2C89.655 28.9467 89.815 29.6067 90.135 30.18C90.455 30.74 90.8817 31.1733 91.415 31.48C91.9483 31.7867 92.555 31.94 93.235 31.94ZM96.855 33.5V30.64L96.975 28.18L96.775 25.72V18.66H98.695V33.5H96.855ZM106.619 33.5V32.14L112.319 26.64C112.826 26.16 113.199 25.74 113.439 25.38C113.692 25.0067 113.859 24.6667 113.939 24.36C114.032 24.04 114.079 23.7333 114.079 23.44C114.079 22.72 113.826 22.1533 113.319 21.74C112.812 21.3267 112.072 21.12 111.099 21.12C110.352 21.12 109.679 21.2467 109.079 21.5C108.479 21.74 107.959 22.12 107.519 22.64L106.159 21.46C106.692 20.78 107.406 20.26 108.299 19.9C109.206 19.5267 110.199 19.34 111.279 19.34C112.252 19.34 113.099 19.5 113.819 19.82C114.539 20.1267 115.092 20.5733 115.479 21.16C115.879 21.7467 116.079 22.44 116.079 23.24C116.079 23.6933 116.019 24.14 115.899 24.58C115.779 25.02 115.552 25.4867 115.219 25.98C114.886 26.4733 114.406 27.0267 113.779 27.64L108.699 32.54L108.219 31.76H116.679V33.5H106.619Z" fill="white" />
                        <path d="M73.3307 62.47C74.1211 63.668 75.8789 63.668 76.6693 62.47L83.3459 52.3515C84.2232 51.0218 83.2696 49.25 81.6765 49.25H68.3235C66.7304 49.25 65.7768 51.0218 66.6541 52.3515L73.3307 62.47Z" fill="#5134A4" />
                    </svg>
                    ) : (<svg width="150" height="67" viewBox="0 0 150 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="148" height="51" rx="7" stroke="white" stroke-width="2" />
                        <path d="M34.6 33.5V19.5H40.06C41.2867 19.5 42.3333 19.6933 43.2 20.08C44.0667 20.4667 44.7333 21.0267 45.2 21.76C45.6667 22.4933 45.9 23.3667 45.9 24.38C45.9 25.3933 45.6667 26.2667 45.2 27C44.7333 27.72 44.0667 28.2733 43.2 28.66C42.3333 29.0467 41.2867 29.24 40.06 29.24H35.7L36.6 28.32V33.5H34.6ZM43.96 33.5L40.4 28.42H42.54L46.14 33.5H43.96ZM36.6 28.52L35.7 27.54H40C41.28 27.54 42.2467 27.2667 42.9 26.72C43.5667 26.16 43.9 25.38 43.9 24.38C43.9 23.38 43.5667 22.6067 42.9 22.06C42.2467 21.5133 41.28 21.24 40 21.24H35.7L36.6 20.24V28.52ZM53.3913 33.62C52.3246 33.62 51.3779 33.3867 50.5513 32.92C49.7246 32.4533 49.0713 31.8133 48.5913 31C48.1113 30.1733 47.8713 29.24 47.8713 28.2C47.8713 27.1467 48.1113 26.2133 48.5913 25.4C49.0713 24.5867 49.7246 23.9533 50.5513 23.5C51.3779 23.0333 52.3246 22.8 53.3913 22.8C54.4446 22.8 55.3846 23.0333 56.2113 23.5C57.0513 23.9533 57.7046 24.5867 58.1713 25.4C58.6513 26.2 58.8913 27.1333 58.8913 28.2C58.8913 29.2533 58.6513 30.1867 58.1713 31C57.7046 31.8133 57.0513 32.4533 56.2113 32.92C55.3846 33.3867 54.4446 33.62 53.3913 33.62ZM53.3913 31.94C54.0713 31.94 54.6779 31.7867 55.2113 31.48C55.7579 31.1733 56.1846 30.74 56.4913 30.18C56.7979 29.6067 56.9513 28.9467 56.9513 28.2C56.9513 27.44 56.7979 26.7867 56.4913 26.24C56.1846 25.68 55.7579 25.2467 55.2113 24.94C54.6779 24.6333 54.0713 24.48 53.3913 24.48C52.7113 24.48 52.1046 24.6333 51.5713 24.94C51.0379 25.2467 50.6113 25.68 50.2913 26.24C49.9713 26.7867 49.8113 27.44 49.8113 28.2C49.8113 28.9467 49.9713 29.6067 50.2913 30.18C50.6113 30.74 51.0379 31.1733 51.5713 31.48C52.1046 31.7867 52.7113 31.94 53.3913 31.94ZM66.0066 33.62C65.0999 33.62 64.2999 33.4533 63.6066 33.12C62.9266 32.7867 62.3932 32.28 62.0066 31.6C61.6332 30.9067 61.4466 30.04 61.4466 29V22.9H63.3666V28.78C63.3666 29.82 63.6132 30.6 64.1066 31.12C64.6132 31.64 65.3199 31.9 66.2266 31.9C66.8932 31.9 67.4732 31.7667 67.9666 31.5C68.4599 31.22 68.8399 30.82 69.1066 30.3C69.3732 29.7667 69.5066 29.1267 69.5066 28.38V22.9H71.4266V33.5H69.6066V30.64L69.9066 31.4C69.5599 32.1067 69.0399 32.6533 68.3466 33.04C67.6532 33.4267 66.8732 33.62 66.0066 33.62ZM80.7417 22.8C81.6084 22.8 82.3684 22.9667 83.0217 23.3C83.6884 23.6333 84.2084 24.14 84.5817 24.82C84.9551 25.5 85.1417 26.36 85.1417 27.4V33.5H83.2217V27.62C83.2217 26.5933 82.9684 25.82 82.4617 25.3C81.9684 24.78 81.2684 24.52 80.3617 24.52C79.6817 24.52 79.0884 24.6533 78.5817 24.92C78.0751 25.1867 77.6817 25.58 77.4017 26.1C77.1351 26.62 77.0017 27.2667 77.0017 28.04V33.5H75.0817V22.9H76.9217V25.76L76.6217 25C76.9684 24.3067 77.5017 23.7667 78.2217 23.38C78.9417 22.9933 79.7817 22.8 80.7417 22.8ZM93.075 33.62C92.0483 33.62 91.1283 33.3933 90.315 32.94C89.515 32.4867 88.8817 31.8533 88.415 31.04C87.9483 30.2267 87.715 29.28 87.715 28.2C87.715 27.12 87.9483 26.18 88.415 25.38C88.8817 24.5667 89.515 23.9333 90.315 23.48C91.1283 23.0267 92.0483 22.8 93.075 22.8C93.9683 22.8 94.775 23 95.495 23.4C96.215 23.8 96.7883 24.4 97.215 25.2C97.655 26 97.875 27 97.875 28.2C97.875 29.4 97.6617 30.4 97.235 31.2C96.8217 32 96.255 32.6067 95.535 33.02C94.815 33.42 93.995 33.62 93.075 33.62ZM93.235 31.94C93.9017 31.94 94.5017 31.7867 95.035 31.48C95.5817 31.1733 96.0083 30.74 96.315 30.18C96.635 29.6067 96.795 28.9467 96.795 28.2C96.795 27.44 96.635 26.7867 96.315 26.24C96.0083 25.68 95.5817 25.2467 95.035 24.94C94.5017 24.6333 93.9017 24.48 93.235 24.48C92.555 24.48 91.9483 24.6333 91.415 24.94C90.8817 25.2467 90.455 25.68 90.135 26.24C89.815 26.7867 89.655 27.44 89.655 28.2C89.655 28.9467 89.815 29.6067 90.135 30.18C90.455 30.74 90.8817 31.1733 91.415 31.48C91.9483 31.7867 92.555 31.94 93.235 31.94ZM96.855 33.5V30.64L96.975 28.18L96.775 25.72V18.66H98.695V33.5H96.855ZM106.619 33.5V32.14L112.319 26.64C112.826 26.16 113.199 25.74 113.439 25.38C113.692 25.0067 113.859 24.6667 113.939 24.36C114.032 24.04 114.079 23.7333 114.079 23.44C114.079 22.72 113.826 22.1533 113.319 21.74C112.812 21.3267 112.072 21.12 111.099 21.12C110.352 21.12 109.679 21.2467 109.079 21.5C108.479 21.74 107.959 22.12 107.519 22.64L106.159 21.46C106.692 20.78 107.406 20.26 108.299 19.9C109.206 19.5267 110.199 19.34 111.279 19.34C112.252 19.34 113.099 19.5 113.819 19.82C114.539 20.1267 115.092 20.5733 115.479 21.16C115.879 21.7467 116.079 22.44 116.079 23.24C116.079 23.6933 116.019 24.14 115.899 24.58C115.779 25.02 115.552 25.4867 115.219 25.98C114.886 26.4733 114.406 27.0267 113.779 27.64L108.699 32.54L108.219 31.76H116.679V33.5H106.619Z" fill="white" />
                    </svg>
                    )}
                </Box>

                <Box _hover={{ cursor: "pointer" }} onClick={() => { handleState(3) }}>
                    {active === 3 ? (<svg width="150" height="67" viewBox="0 0 150 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="150" height="53" rx="8" fill="#5134A4" />
                        <path d="M34.6 33.5V19.5H40.06C41.2867 19.5 42.3333 19.6933 43.2 20.08C44.0667 20.4667 44.7333 21.0267 45.2 21.76C45.6667 22.4933 45.9 23.3667 45.9 24.38C45.9 25.3933 45.6667 26.2667 45.2 27C44.7333 27.72 44.0667 28.2733 43.2 28.66C42.3333 29.0467 41.2867 29.24 40.06 29.24H35.7L36.6 28.32V33.5H34.6ZM43.96 33.5L40.4 28.42H42.54L46.14 33.5H43.96ZM36.6 28.52L35.7 27.54H40C41.28 27.54 42.2467 27.2667 42.9 26.72C43.5667 26.16 43.9 25.38 43.9 24.38C43.9 23.38 43.5667 22.6067 42.9 22.06C42.2467 21.5133 41.28 21.24 40 21.24H35.7L36.6 20.24V28.52ZM53.3913 33.62C52.3246 33.62 51.3779 33.3867 50.5513 32.92C49.7246 32.4533 49.0713 31.8133 48.5913 31C48.1113 30.1733 47.8713 29.24 47.8713 28.2C47.8713 27.1467 48.1113 26.2133 48.5913 25.4C49.0713 24.5867 49.7246 23.9533 50.5513 23.5C51.3779 23.0333 52.3246 22.8 53.3913 22.8C54.4446 22.8 55.3846 23.0333 56.2113 23.5C57.0513 23.9533 57.7046 24.5867 58.1713 25.4C58.6513 26.2 58.8913 27.1333 58.8913 28.2C58.8913 29.2533 58.6513 30.1867 58.1713 31C57.7046 31.8133 57.0513 32.4533 56.2113 32.92C55.3846 33.3867 54.4446 33.62 53.3913 33.62ZM53.3913 31.94C54.0713 31.94 54.6779 31.7867 55.2113 31.48C55.7579 31.1733 56.1846 30.74 56.4913 30.18C56.7979 29.6067 56.9513 28.9467 56.9513 28.2C56.9513 27.44 56.7979 26.7867 56.4913 26.24C56.1846 25.68 55.7579 25.2467 55.2113 24.94C54.6779 24.6333 54.0713 24.48 53.3913 24.48C52.7113 24.48 52.1046 24.6333 51.5713 24.94C51.0379 25.2467 50.6113 25.68 50.2913 26.24C49.9713 26.7867 49.8113 27.44 49.8113 28.2C49.8113 28.9467 49.9713 29.6067 50.2913 30.18C50.6113 30.74 51.0379 31.1733 51.5713 31.48C52.1046 31.7867 52.7113 31.94 53.3913 31.94ZM66.0066 33.62C65.0999 33.62 64.2999 33.4533 63.6066 33.12C62.9266 32.7867 62.3932 32.28 62.0066 31.6C61.6332 30.9067 61.4466 30.04 61.4466 29V22.9H63.3666V28.78C63.3666 29.82 63.6132 30.6 64.1066 31.12C64.6132 31.64 65.3199 31.9 66.2266 31.9C66.8932 31.9 67.4732 31.7667 67.9666 31.5C68.4599 31.22 68.8399 30.82 69.1066 30.3C69.3732 29.7667 69.5066 29.1267 69.5066 28.38V22.9H71.4266V33.5H69.6066V30.64L69.9066 31.4C69.5599 32.1067 69.0399 32.6533 68.3466 33.04C67.6532 33.4267 66.8732 33.62 66.0066 33.62ZM80.7417 22.8C81.6084 22.8 82.3684 22.9667 83.0217 23.3C83.6884 23.6333 84.2084 24.14 84.5817 24.82C84.9551 25.5 85.1417 26.36 85.1417 27.4V33.5H83.2217V27.62C83.2217 26.5933 82.9684 25.82 82.4617 25.3C81.9684 24.78 81.2684 24.52 80.3617 24.52C79.6817 24.52 79.0884 24.6533 78.5817 24.92C78.0751 25.1867 77.6817 25.58 77.4017 26.1C77.1351 26.62 77.0017 27.2667 77.0017 28.04V33.5H75.0817V22.9H76.9217V25.76L76.6217 25C76.9684 24.3067 77.5017 23.7667 78.2217 23.38C78.9417 22.9933 79.7817 22.8 80.7417 22.8ZM93.075 33.62C92.0483 33.62 91.1283 33.3933 90.315 32.94C89.515 32.4867 88.8817 31.8533 88.415 31.04C87.9483 30.2267 87.715 29.28 87.715 28.2C87.715 27.12 87.9483 26.18 88.415 25.38C88.8817 24.5667 89.515 23.9333 90.315 23.48C91.1283 23.0267 92.0483 22.8 93.075 22.8C93.9683 22.8 94.775 23 95.495 23.4C96.215 23.8 96.7883 24.4 97.215 25.2C97.655 26 97.875 27 97.875 28.2C97.875 29.4 97.6617 30.4 97.235 31.2C96.8217 32 96.255 32.6067 95.535 33.02C94.815 33.42 93.995 33.62 93.075 33.62ZM93.235 31.94C93.9017 31.94 94.5017 31.7867 95.035 31.48C95.5817 31.1733 96.0083 30.74 96.315 30.18C96.635 29.6067 96.795 28.9467 96.795 28.2C96.795 27.44 96.635 26.7867 96.315 26.24C96.0083 25.68 95.5817 25.2467 95.035 24.94C94.5017 24.6333 93.9017 24.48 93.235 24.48C92.555 24.48 91.9483 24.6333 91.415 24.94C90.8817 25.2467 90.455 25.68 90.135 26.24C89.815 26.7867 89.655 27.44 89.655 28.2C89.655 28.9467 89.815 29.6067 90.135 30.18C90.455 30.74 90.8817 31.1733 91.415 31.48C91.9483 31.7867 92.555 31.94 93.235 31.94ZM96.855 33.5V30.64L96.975 28.18L96.775 25.72V18.66H98.695V33.5H96.855ZM111.119 33.66C110.132 33.66 109.172 33.5067 108.239 33.2C107.319 32.8933 106.566 32.48 105.979 31.96L106.899 30.38C107.366 30.82 107.972 31.18 108.719 31.46C109.466 31.74 110.266 31.88 111.119 31.88C112.159 31.88 112.966 31.66 113.539 31.22C114.126 30.7667 114.419 30.16 114.419 29.4C114.419 28.6667 114.139 28.08 113.579 27.64C113.032 27.1867 112.159 26.96 110.959 26.96H109.839V25.56L113.999 20.44L114.279 21.24H106.619V19.5H115.859V20.86L111.719 25.96L110.679 25.34H111.339C113.032 25.34 114.299 25.72 115.139 26.48C115.992 27.24 116.419 28.2067 116.419 29.38C116.419 30.1667 116.226 30.8867 115.839 31.54C115.452 32.1933 114.866 32.7133 114.079 33.1C113.306 33.4733 112.319 33.66 111.119 33.66Z" fill="white" />
                        <path d="M73.3307 62.47C74.1211 63.668 75.8789 63.668 76.6693 62.47L83.3459 52.3515C84.2232 51.0218 83.2696 49.25 81.6765 49.25H68.3235C66.7304 49.25 65.7768 51.0218 66.6541 52.3515L73.3307 62.47Z" fill="#5134A4" />
                    </svg>
                    ) : (<svg width="150" height="67" viewBox="0 0 150 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="148" height="51" rx="7" stroke="white" stroke-width="2" />
                        <path d="M34.6 33.5V19.5H40.06C41.2867 19.5 42.3333 19.6933 43.2 20.08C44.0667 20.4667 44.7333 21.0267 45.2 21.76C45.6667 22.4933 45.9 23.3667 45.9 24.38C45.9 25.3933 45.6667 26.2667 45.2 27C44.7333 27.72 44.0667 28.2733 43.2 28.66C42.3333 29.0467 41.2867 29.24 40.06 29.24H35.7L36.6 28.32V33.5H34.6ZM43.96 33.5L40.4 28.42H42.54L46.14 33.5H43.96ZM36.6 28.52L35.7 27.54H40C41.28 27.54 42.2467 27.2667 42.9 26.72C43.5667 26.16 43.9 25.38 43.9 24.38C43.9 23.38 43.5667 22.6067 42.9 22.06C42.2467 21.5133 41.28 21.24 40 21.24H35.7L36.6 20.24V28.52ZM53.3913 33.62C52.3246 33.62 51.3779 33.3867 50.5513 32.92C49.7246 32.4533 49.0713 31.8133 48.5913 31C48.1113 30.1733 47.8713 29.24 47.8713 28.2C47.8713 27.1467 48.1113 26.2133 48.5913 25.4C49.0713 24.5867 49.7246 23.9533 50.5513 23.5C51.3779 23.0333 52.3246 22.8 53.3913 22.8C54.4446 22.8 55.3846 23.0333 56.2113 23.5C57.0513 23.9533 57.7046 24.5867 58.1713 25.4C58.6513 26.2 58.8913 27.1333 58.8913 28.2C58.8913 29.2533 58.6513 30.1867 58.1713 31C57.7046 31.8133 57.0513 32.4533 56.2113 32.92C55.3846 33.3867 54.4446 33.62 53.3913 33.62ZM53.3913 31.94C54.0713 31.94 54.6779 31.7867 55.2113 31.48C55.7579 31.1733 56.1846 30.74 56.4913 30.18C56.7979 29.6067 56.9513 28.9467 56.9513 28.2C56.9513 27.44 56.7979 26.7867 56.4913 26.24C56.1846 25.68 55.7579 25.2467 55.2113 24.94C54.6779 24.6333 54.0713 24.48 53.3913 24.48C52.7113 24.48 52.1046 24.6333 51.5713 24.94C51.0379 25.2467 50.6113 25.68 50.2913 26.24C49.9713 26.7867 49.8113 27.44 49.8113 28.2C49.8113 28.9467 49.9713 29.6067 50.2913 30.18C50.6113 30.74 51.0379 31.1733 51.5713 31.48C52.1046 31.7867 52.7113 31.94 53.3913 31.94ZM66.0066 33.62C65.0999 33.62 64.2999 33.4533 63.6066 33.12C62.9266 32.7867 62.3932 32.28 62.0066 31.6C61.6332 30.9067 61.4466 30.04 61.4466 29V22.9H63.3666V28.78C63.3666 29.82 63.6132 30.6 64.1066 31.12C64.6132 31.64 65.3199 31.9 66.2266 31.9C66.8932 31.9 67.4732 31.7667 67.9666 31.5C68.4599 31.22 68.8399 30.82 69.1066 30.3C69.3732 29.7667 69.5066 29.1267 69.5066 28.38V22.9H71.4266V33.5H69.6066V30.64L69.9066 31.4C69.5599 32.1067 69.0399 32.6533 68.3466 33.04C67.6532 33.4267 66.8732 33.62 66.0066 33.62ZM80.7417 22.8C81.6084 22.8 82.3684 22.9667 83.0217 23.3C83.6884 23.6333 84.2084 24.14 84.5817 24.82C84.9551 25.5 85.1417 26.36 85.1417 27.4V33.5H83.2217V27.62C83.2217 26.5933 82.9684 25.82 82.4617 25.3C81.9684 24.78 81.2684 24.52 80.3617 24.52C79.6817 24.52 79.0884 24.6533 78.5817 24.92C78.0751 25.1867 77.6817 25.58 77.4017 26.1C77.1351 26.62 77.0017 27.2667 77.0017 28.04V33.5H75.0817V22.9H76.9217V25.76L76.6217 25C76.9684 24.3067 77.5017 23.7667 78.2217 23.38C78.9417 22.9933 79.7817 22.8 80.7417 22.8ZM93.075 33.62C92.0483 33.62 91.1283 33.3933 90.315 32.94C89.515 32.4867 88.8817 31.8533 88.415 31.04C87.9483 30.2267 87.715 29.28 87.715 28.2C87.715 27.12 87.9483 26.18 88.415 25.38C88.8817 24.5667 89.515 23.9333 90.315 23.48C91.1283 23.0267 92.0483 22.8 93.075 22.8C93.9683 22.8 94.775 23 95.495 23.4C96.215 23.8 96.7883 24.4 97.215 25.2C97.655 26 97.875 27 97.875 28.2C97.875 29.4 97.6617 30.4 97.235 31.2C96.8217 32 96.255 32.6067 95.535 33.02C94.815 33.42 93.995 33.62 93.075 33.62ZM93.235 31.94C93.9017 31.94 94.5017 31.7867 95.035 31.48C95.5817 31.1733 96.0083 30.74 96.315 30.18C96.635 29.6067 96.795 28.9467 96.795 28.2C96.795 27.44 96.635 26.7867 96.315 26.24C96.0083 25.68 95.5817 25.2467 95.035 24.94C94.5017 24.6333 93.9017 24.48 93.235 24.48C92.555 24.48 91.9483 24.6333 91.415 24.94C90.8817 25.2467 90.455 25.68 90.135 26.24C89.815 26.7867 89.655 27.44 89.655 28.2C89.655 28.9467 89.815 29.6067 90.135 30.18C90.455 30.74 90.8817 31.1733 91.415 31.48C91.9483 31.7867 92.555 31.94 93.235 31.94ZM96.855 33.5V30.64L96.975 28.18L96.775 25.72V18.66H98.695V33.5H96.855ZM111.119 33.66C110.132 33.66 109.172 33.5067 108.239 33.2C107.319 32.8933 106.566 32.48 105.979 31.96L106.899 30.38C107.366 30.82 107.972 31.18 108.719 31.46C109.466 31.74 110.266 31.88 111.119 31.88C112.159 31.88 112.966 31.66 113.539 31.22C114.126 30.7667 114.419 30.16 114.419 29.4C114.419 28.6667 114.139 28.08 113.579 27.64C113.032 27.1867 112.159 26.96 110.959 26.96H109.839V25.56L113.999 20.44L114.279 21.24H106.619V19.5H115.859V20.86L111.719 25.96L110.679 25.34H111.339C113.032 25.34 114.299 25.72 115.139 26.48C115.992 27.24 116.419 28.2067 116.419 29.38C116.419 30.1667 116.226 30.8867 115.839 31.54C115.452 32.1933 114.866 32.7133 114.079 33.1C113.306 33.4733 112.319 33.66 111.119 33.66Z" fill="white" />
                    </svg>
                    )}
                </Box>

            </Stack>

            <Box mt="36px" bg="#0B0E29" borderRadius="md" width="100%" textAlign="left" p="36px">
                <Text fontSize="1.5rem" color="white" fontWeight="semibold" mb="12px">Round {active}</Text>
                {active === 1 && (
                    <Text color="white" fontSize="1.25rem" fontWeight="400">
                        Teams will be presented with a challenging problem statement to spark their creativity.
                    </Text>
                )}
                {active === 2 && (
                    <Text color="white" fontSize="1.25rem" fontWeight="400">
                        Teams will develop and present their innovative solutions to the problem statement.
                    </Text>
                )}
                {active === 3 && (
                    <Text color="white" fontSize="1.25rem" fontWeight="400">
                        Finalists will compete in the grand finale, presenting their refined solutions.
                    </Text>
                )}
                <Button
                    h="54px"
                    w="256px"
                    mt="16px"
                    fontWeight="400" color="white" fontSize="1.25rem"
                    onClick={() => {
                        const startDate = active === 1 ? new Date('2024-07-15T00:00:00+05:30') :
                            active === 2 ? new Date('2024-07-22T00:00:00+05:30') :
                                new Date('2024-08-02T00:00:00+05:30');
                        const endDate = active === 1 ? new Date('2024-07-19T00:00:00+05:30') :
                            active === 2 ? new Date('2024-07-27T00:00:00+05:30') :
                                new Date('2024-08-02T23:59:59+05:30');
                        redirectToCalender(startDate, endDate, active);
                    }}
                    variant="outline"
                    borderColor="white"
                    colorScheme="whiteAlpha"
                >
                    {`Date: ${active === 1 ? '15th - 19th July' : active === 2 ? '22th - 27th July' : '2nd Aug'}`}
                </Button>
                {/* <Text fontWeight="semibold" color="white" fontSize="1.25rem" mt="2">
                        Date:
                    </Text>
                    <Text fontWeight="400" color="white" fontSize="1.25rem" mt="2" >{active === 1 ? '8th - 10th July' : active === 2 ? '12th - 14th July' : '16th July'}</Text> */}
            </Box>
        </>
    );
}

export default Timeline

