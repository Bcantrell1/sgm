import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
	Box, Button, Flex, Hide, HStack, IconButton, Link, Menu, Show, Stack, Text, useColorMode, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import Image from 'next/image';

const Links = ['Services', 'Gallery', 'About', 'Contact'];

const NavLink = ({ children }: { children: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`/${children.toLowerCase()}`}>
    {children}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Flex alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
							<Link href={'/'}><Box><Image src="/SGM_LOGO.png" height={50} width={170} alt={'SGM Logo'} /></Box></Link>
							<Text fontSize='xs'>#ROC340070</Text>
						</Flex>
					  <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
							<Box marginRight={2}>
								<Button colorScheme={'yellow'} backgroundColor={'yellow.500'}>
									<Link href='tel:+15206682281'>
										(520) 668-2281
									</Link>
								</Button>
							</Box>
							<Hide below="md">
								<Button onClick={toggleColorMode}>
									{colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
								</Button>
							</Hide>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
							<Show below="md">
								<Button onClick={toggleColorMode}>
									{colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
								</Button>
							</Show>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
