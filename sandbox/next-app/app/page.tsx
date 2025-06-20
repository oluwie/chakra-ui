import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Span,
  Stack,
  Text,
  VStack,
  ClientOnly,
  Skeleton,
  Image,
} from "@chakra-ui/react"
import NextImage from "next/image"
import { ColorModeToggle } from "../components/color-mode-toggle"

// Header Component
const Header = () => (
  <Box
    as="header"
    bg="bg.surface"
    position="sticky"
    top="0"
    zIndex="sticky"
    backdropFilter="blur(10px)"
    borderBottom="1px"
    borderColor="border.subtle"
  >
    <Container maxW="8xl">
      <Flex justify="space-between" align="center" py="6">
        <HStack gap="12">
          <VStack gap="0" align="start">
            <Text fontSize="xl" fontWeight="black" color="purple.500">
              PIXEL
            </Text>
            <Text fontSize="xs" color="fg.muted" mt="-1">
              CREATIVE STUDIO
            </Text>
          </VStack>
          <HStack gap="8" hideBelow="lg">
            <Link
              fontWeight="medium"
              color="fg.muted"
              _hover={{ color: "purple.500" }}
              transition="all 0.2s"
            >
              Work
            </Link>
            <Link
              fontWeight="medium"
              color="fg.muted"
              _hover={{ color: "purple.500" }}
              transition="all 0.2s"
            >
              Services
            </Link>
            <Link
              fontWeight="medium"
              color="fg.muted"
              _hover={{ color: "purple.500" }}
              transition="all 0.2s"
            >
              About
            </Link>
            <Link
              fontWeight="medium"
              color="fg.muted"
              _hover={{ color: "purple.500" }}
              transition="all 0.2s"
            >
              Blog
            </Link>
          </HStack>
        </HStack>

        <HStack gap="4">
          <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
            <ColorModeToggle />
          </ClientOnly>
          <Button
            colorPalette="purple"
            size="lg"
            fontWeight="semibold"
            px="8"
            rounded="full"
            bg="gradient-to-r"
            bgGradient="linear(to-r, purple.500, pink.500)"
            _hover={{
              bgGradient: "linear(to-r, purple.600, pink.600)",
              transform: "translateY(-2px)",
            }}
            transition="all 0.3s"
            shadow="lg"
          >
            Let's Talk
          </Button>
        </HStack>
      </Flex>
    </Container>
  </Box>
)

// Hero Section
const HeroSection = () => (
  <Box
    as="section"
    py={{ base: "20", md: "32" }}
    bg="bg.surface"
    overflow="hidden"
    position="relative"
  >
    {/* Background Pattern */}
    <Box
      position="absolute"
      inset="0"
      opacity="0.1"
      bg="gradient-to-br"
      bgGradient="linear(to-br, purple.400, pink.400, orange.400)"
      transform="rotate(15deg) scale(1.5)"
      zIndex="0"
    />

    <Container maxW="8xl" position="relative" zIndex="1">
      <Stack gap="20" align="center" textAlign="center">
        <Stack gap="8" maxW="5xl">
          <Box>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="semibold"
              color="purple.500"
              textTransform="uppercase"
              letterSpacing="wide"
              mb="6"
            >
              Award-winning creative studio
            </Text>
            <Heading
              size={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="black"
              lineHeight="0.9"
              bgGradient="linear(to-r, purple.500, pink.500, orange.500)"
              bgClip="text"
              color="transparent"
              mb="6"
            >
              We craft digital
              <Span display="block" color="fg">
                experiences that
              </Span>
              <Span display="block">inspire</Span>
            </Heading>
          </Box>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            maxW="3xl"
            mx="auto"
            lineHeight="1.7"
          >
            From stunning websites to powerful brands, we bring creative visions
            to life with cutting-edge design and technology. Ready to make your
            mark in the digital world?
          </Text>
        </Stack>

        <HStack gap="6" flexWrap="wrap" justify="center">
          <Button
            size="xl"
            px="12"
            py="6"
            fontWeight="semibold"
            rounded="full"
            bg="gradient-to-r"
            bgGradient="linear(to-r, purple.500, pink.500)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, purple.600, pink.600)",
              transform: "translateY(-3px)",
            }}
            transition="all 0.3s"
            shadow="2xl"
          >
            Start Your Project
          </Button>
          <Button
            variant="outline"
            size="xl"
            px="12"
            py="6"
            fontWeight="semibold"
            rounded="full"
            borderColor="purple.500"
            color="purple.500"
            _hover={{
              bg: "purple.50",
              _dark: { bg: "purple.900/20" },
              transform: "translateY(-3px)",
            }}
            transition="all 0.3s"
          >
            View Our Work
          </Button>
        </HStack>

        {/* Creative Visual Element */}
        <Grid columns={{ base: 1, md: 3 }} gap="8" w="full" maxW="4xl" pt="8">
          {creativeCards.map((card, index) => (
            <Card.Root
              key={index}
              variant="elevated"
              h="64"
              overflow="hidden"
              transform={`rotate(${card.rotation}deg)`}
              _hover={{
                transform: `rotate(0deg) scale(1.05)`,
              }}
              transition="all 0.5s ease-in-out"
              cursor="pointer"
            >
              <Box
                h="full"
                bg={`gradient-to-br`}
                bgGradient={`linear(to-br, ${card.gradient})`}
                display="flex"
                align="center"
                justify="center"
                flexDirection="column"
                gap="4"
                p="6"
                color="white"
              >
                <Text fontSize="3xl">{card.icon}</Text>
                <Text fontWeight="bold" fontSize="lg" textAlign="center">
                  {card.title}
                </Text>
              </Box>
            </Card.Root>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)

// Services Section
const ServicesSection = () => (
  <Box as="section" py={{ base: "20", md: "32" }} bg="bg.canvas">
    <Container maxW="8xl">
      <Stack gap="20">
        <Stack gap="6" textAlign="center" maxW="3xl" mx="auto">
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="purple.500"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            What we do
          </Text>
          <Heading size={{ base: "2xl", md: "4xl" }} fontWeight="black">
            Services that drive
            <Span color="purple.500" display="block">
              exceptional results
            </Span>
          </Heading>
          <Text fontSize="lg" color="fg.muted" lineHeight="1.7">
            We combine strategy, design, and technology to create digital
            experiences that captivate and convert.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="8">
          {services.map((service, index) => (
            <Card.Root
              key={index}
              variant="elevated"
              h="full"
              _hover={{
                transform: "translateY(-8px)",
                shadow: "2xl",
              }}
              transition="all 0.3s"
              overflow="hidden"
            >
              <Box
                h="3"
                bg="gradient-to-r"
                bgGradient={`linear(to-r, ${service.color}.400, ${service.color}.600)`}
              />
              <Card.Body p="8">
                <Stack gap="6">
                  <Box
                    w="12"
                    h="12"
                    bg={`${service.color}.100`}
                    _dark={{ bg: `${service.color}.900/20` }}
                    rounded="xl"
                    display="flex"
                    align="center"
                    justify="center"
                    fontSize="2xl"
                  >
                    {service.icon}
                  </Box>
                  <Stack gap="4">
                    <Heading size="lg" fontWeight="bold">
                      {service.title}
                    </Heading>
                    <Text color="fg.muted" lineHeight="1.6">
                      {service.description}
                    </Text>
                  </Stack>
                  <HStack>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color={`${service.color}.500`}
                    >
                      Learn more →
                    </Text>
                  </HStack>
                </Stack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
)

// Portfolio Preview Section
const PortfolioSection = () => (
  <Box as="section" py={{ base: "20", md: "32" }} bg="bg.surface">
    <Container maxW="8xl">
      <Stack gap="20">
        <Flex justify="space-between" align="end" flexWrap="wrap" gap="8">
          <Stack gap="6" maxW="2xl">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="purple.500"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Latest work
            </Text>
            <Heading size={{ base: "2xl", md: "4xl" }} fontWeight="black">
              Projects we're
              <Span color="purple.500" display="block">
                proud of
              </Span>
            </Heading>
          </Stack>
          <Button
            variant="outline"
            size="lg"
            fontWeight="semibold"
            rounded="full"
            borderColor="purple.500"
            color="purple.500"
            px="8"
          >
            View All Projects
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
          {portfolio.map((project, index) => (
            <Card.Root
              key={index}
              variant="elevated"
              overflow="hidden"
              _hover={{
                transform: "scale(1.02)",
              }}
              transition="all 0.3s"
              cursor="pointer"
            >
              <Box
                h="64"
                bg="gradient-to-br"
                bgGradient={`linear(to-br, ${project.gradient})`}
                display="flex"
                align="center"
                justify="center"
                fontSize="6xl"
                color="white"
              >
                {project.icon}
              </Box>
              <Card.Body p="8">
                <Stack gap="4">
                  <HStack justify="space-between">
                    <Heading size="lg" fontWeight="bold">
                      {project.title}
                    </Heading>
                    <Text
                      fontSize="sm"
                      px="3"
                      py="1"
                      bg="purple.100"
                      _dark={{ bg: "purple.900/20" }}
                      color="purple.600"
                      rounded="full"
                      fontWeight="medium"
                    >
                      {project.category}
                    </Text>
                  </HStack>
                  <Text color="fg.muted" lineHeight="1.6">
                    {project.description}
                  </Text>
                </Stack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
)

// CTA Section
const CTASection = () => (
  <Box
    as="section"
    py={{ base: "20", md: "32" }}
    bg="gradient-to-br"
    bgGradient="linear(to-br, purple.600, pink.600)"
    color="white"
    position="relative"
    overflow="hidden"
  >
    <Box
      position="absolute"
      top="-50%"
      right="-20%"
      w="120%"
      h="120%"
      bg="gradient-to-br"
      bgGradient="linear(to-br, purple.400, pink.400)"
      rounded="full"
      opacity="0.1"
      transform="rotate(15deg)"
    />

    <Container maxW="6xl" position="relative" zIndex="1">
      <Stack gap="12" textAlign="center">
        <Stack gap="6">
          <Heading
            size={{ base: "3xl", md: "5xl" }}
            fontWeight="black"
            lineHeight="1.1"
          >
            Ready to bring your
            <Span display="block">vision to life?</Span>
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            opacity="0.9"
            maxW="3xl"
            mx="auto"
          >
            Let's create something amazing together. From concept to launch,
            we'll be your partner in digital success.
          </Text>
        </Stack>

        <HStack gap="6" justify="center" flexWrap="wrap">
          <Button
            size="xl"
            px="12"
            py="6"
            bg="white"
            color="purple.600"
            fontWeight="bold"
            rounded="full"
            _hover={{
              transform: "translateY(-3px)",
              shadow: "2xl",
            }}
            transition="all 0.3s"
          >
            Start Your Project
          </Button>
          <Button
            variant="outline"
            size="xl"
            px="12"
            py="6"
            borderColor="white"
            color="white"
            fontWeight="semibold"
            rounded="full"
            _hover={{
              bg: "whiteAlpha.200",
              transform: "translateY(-3px)",
            }}
            transition="all 0.3s"
          >
            Schedule a Call
          </Button>
        </HStack>

        <HStack gap="12" justify="center" pt="8" opacity="0.8">
          <VStack gap="1">
            <Text fontSize="2xl" fontWeight="bold">
              200+
            </Text>
            <Text fontSize="sm">Projects Delivered</Text>
          </VStack>
          <VStack gap="1">
            <Text fontSize="2xl" fontWeight="bold">
              50+
            </Text>
            <Text fontSize="sm">Happy Clients</Text>
          </VStack>
          <VStack gap="1">
            <Text fontSize="2xl" fontWeight="bold">
              5★
            </Text>
            <Text fontSize="sm">Average Rating</Text>
          </VStack>
        </HStack>
      </Stack>
    </Container>
  </Box>
)

// Footer
const Footer = () => (
  <Box as="footer" bg="bg.surface" borderTop="1px" borderColor="border">
    <Container maxW="8xl">
      <Stack gap="16" py="20">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="12">
          <Stack gap="6">
            <VStack gap="0" align="start">
              <Text fontSize="2xl" fontWeight="black" color="purple.500">
                PIXEL
              </Text>
              <Text fontSize="sm" color="fg.muted">
                CREATIVE STUDIO
              </Text>
            </VStack>
            <Text color="fg.muted" maxW="sm" lineHeight="1.6">
              We're a creative studio passionate about crafting digital
              experiences that inspire, engage, and convert.
            </Text>
            <HStack gap="4">
              {["🐦", "📸", "💼", "📺"].map((icon, index) => (
                <Box
                  key={index}
                  w="10"
                  h="10"
                  bg="purple.100"
                  _dark={{ bg: "purple.900/20" }}
                  rounded="full"
                  display="flex"
                  align="center"
                  justify="center"
                  cursor="pointer"
                  _hover={{
                    bg: "purple.500",
                    color: "white",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s"
                >
                  {icon}
                </Box>
              ))}
            </HStack>
          </Stack>

          <Stack gap="4">
            <Text fontWeight="bold" fontSize="lg">
              Services
            </Text>
            <Stack gap="2">
              {[
                "Brand Design",
                "Web Development",
                "Digital Marketing",
                "UI/UX Design",
              ].map((item) => (
                <Link
                  key={item}
                  color="fg.muted"
                  _hover={{ color: "purple.500" }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack gap="4">
            <Text fontWeight="bold" fontSize="lg">
              Company
            </Text>
            <Stack gap="2">
              {["About Us", "Our Process", "Careers", "Blog"].map((item) => (
                <Link
                  key={item}
                  color="fg.muted"
                  _hover={{ color: "purple.500" }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack gap="4">
            <Text fontWeight="bold" fontSize="lg">
              Get in Touch
            </Text>
            <Stack gap="3">
              <Text color="fg.muted">hello@pixelstudio.com</Text>
              <Text color="fg.muted">+1 (555) 123-4567</Text>
              <Text color="fg.muted" fontSize="sm">
                123 Creative Street
                <br />
                Design District, CA 90210
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Box pt="8" borderTop="1px" borderColor="border">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap="4"
          >
            <Text color="fg.muted" fontSize="sm">
              © 2024 Pixel Creative Studio. All rights reserved.
            </Text>
            <HStack gap="6">
              <Link
                color="fg.muted"
                fontSize="sm"
                _hover={{ color: "purple.500" }}
              >
                Privacy Policy
              </Link>
              <Link
                color="fg.muted"
                fontSize="sm"
                _hover={{ color: "purple.500" }}
              >
                Terms of Service
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Stack>
    </Container>
  </Box>
)

// Data
const creativeCards = [
  {
    icon: "🎨",
    title: "Creative Design",
    rotation: -5,
    gradient: "purple.500, pink.500",
  },
  {
    icon: "⚡",
    title: "Fast Development",
    rotation: 2,
    gradient: "blue.500, cyan.500",
  },
  {
    icon: "🚀",
    title: "Launch Success",
    rotation: -3,
    gradient: "orange.500, red.500",
  },
]

const services = [
  {
    icon: "🎨",
    title: "Brand Design",
    description:
      "Complete brand identity packages that tell your story and connect with your audience.",
    color: "purple",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Custom websites and applications built with cutting-edge technology and best practices.",
    color: "blue",
  },
  {
    icon: "📱",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces that provide seamless user experiences across all devices.",
    color: "green",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description:
      "Strategic campaigns that drive engagement, conversions, and sustainable growth.",
    color: "orange",
  },
  {
    icon: "🎯",
    title: "Strategy Consulting",
    description:
      "Data-driven insights and recommendations to optimize your digital presence.",
    color: "pink",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Speed and efficiency improvements that enhance user experience and SEO rankings.",
    color: "cyan",
  },
]

const portfolio = [
  {
    icon: "🛍️",
    title: "EcoStyle Marketplace",
    category: "E-commerce",
    description:
      "A sustainable fashion marketplace with advanced filtering and AR try-on features.",
    gradient: "green.500, teal.500",
  },
  {
    icon: "🏋️",
    title: "FitTrack Pro",
    category: "Health & Fitness",
    description:
      "Comprehensive fitness tracking app with social features and AI-powered recommendations.",
    gradient: "orange.500, red.500",
  },
  {
    icon: "🎵",
    title: "SoundWave Studio",
    category: "Entertainment",
    description:
      "Music production platform connecting artists with professional producers worldwide.",
    gradient: "purple.500, pink.500",
  },
  {
    icon: "🏠",
    title: "HomeSpace",
    category: "Real Estate",
    description:
      "Virtual property tours and smart home integration for modern real estate.",
    gradient: "blue.500, cyan.500",
  },
]

// Main Page Component
export default async function Page() {
  return (
    <Box minH="100vh" bg="bg.canvas">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
    </Box>
  )
}
