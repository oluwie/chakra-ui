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
} from "@chakra-ui/react"
import Image from "next/image"
import { ColorModeToggle } from "../components/color-mode-toggle"

// Header Component
const Header = () => (
  <Box
    as="header"
    borderBottom="1px"
    borderColor="border"
    bg="bg.surface"
    position="sticky"
    top="0"
    zIndex="sticky"
  >
    <Container maxW="7xl">
      <Flex justify="space-between" align="center" py="4">
        <HStack gap="8">
          <Box>
            <Image
              alt="chakra logo"
              src="/static/logo.svg"
              width="32"
              height="32"
            />
          </Box>
          <HStack gap="6" hideBelow="md">
            <Link fontWeight="medium" color="fg.muted" _hover={{ color: "fg" }}>
              Features
            </Link>
            <Link fontWeight="medium" color="fg.muted" _hover={{ color: "fg" }}>
              Pricing
            </Link>
            <Link fontWeight="medium" color="fg.muted" _hover={{ color: "fg" }}>
              About
            </Link>
            <Link fontWeight="medium" color="fg.muted" _hover={{ color: "fg" }}>
              Contact
            </Link>
          </HStack>
        </HStack>

        <HStack gap="4">
          <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
            <ColorModeToggle />
          </ClientOnly>
          <Button variant="ghost" hideBelow="md">
            Sign In
          </Button>
          <Button colorPalette="blue" size="sm">
            Get Started
          </Button>
        </HStack>
      </Flex>
    </Container>
  </Box>
)

// Hero Section
const HeroSection = () => (
  <Box as="section" py={{ base: "16", md: "24" }} bg="bg.surface">
    <Container maxW="7xl">
      <Stack gap="8" align="center" textAlign="center">
        <Stack gap="4" maxW="3xl">
          <Heading
            size={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            Build amazing apps with <Span color="blue.500">Chakra UI v3</Span>
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" maxW="2xl">
            Create beautiful, accessible, and performant applications with our
            comprehensive component library built for React developers.
          </Text>
        </Stack>

        <HStack gap="4" flexWrap="wrap" justify="center">
          <Button colorPalette="blue" size="lg" px="8">
            Start Building Now
          </Button>
          <Button variant="outline" size="lg" px="8">
            View Documentation
          </Button>
        </HStack>

        <Box mt="8" p="2" bg="bg.muted" rounded="xl" maxW="4xl" w="full">
          <Box
            bg="white"
            _dark={{ bg: "gray.900" }}
            rounded="lg"
            p="8"
            shadow="lg"
          >
            <VStack gap="6">
              <Heading size="lg" color="fg.muted">
                Experience the power of Chakra UI
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap="4" w="full">
                <Card.Root variant="outline">
                  <Card.Body textAlign="center" py="6">
                    <Text fontWeight="semibold">Accessible</Text>
                  </Card.Body>
                </Card.Root>
                <Card.Root variant="outline">
                  <Card.Body textAlign="center" py="6">
                    <Text fontWeight="semibold">Themeable</Text>
                  </Card.Body>
                </Card.Root>
                <Card.Root variant="outline">
                  <Card.Body textAlign="center" py="6">
                    <Text fontWeight="semibold">Composable</Text>
                  </Card.Body>
                </Card.Root>
              </SimpleGrid>
            </VStack>
          </Box>
        </Box>
      </Stack>
    </Container>
  </Box>
)

// Features Section
const FeaturesSection = () => (
  <Box as="section" py={{ base: "16", md: "24" }} bg="bg.canvas">
    <Container maxW="7xl">
      <Stack gap="16">
        <Stack gap="4" textAlign="center" maxW="3xl" mx="auto">
          <Heading size={{ base: "2xl", md: "3xl" }}>
            Everything you need to build modern UIs
          </Heading>
          <Text fontSize="lg" color="fg.muted">
            Chakra UI provides the building blocks you need to build your React
            application
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="8">
          {features.map((feature, index) => (
            <Card.Root key={index} variant="elevated" h="full">
              <Card.Body p="6">
                <Stack gap="4">
                  <Box>
                    <Box
                      p="3"
                      bg="blue.50"
                      _dark={{ bg: "blue.900/20" }}
                      rounded="lg"
                      w="fit-content"
                    >
                      <Box fontSize="xl" color="blue.500">
                        {feature.icon}
                      </Box>
                    </Box>
                  </Box>
                  <Stack gap="2">
                    <Heading size="md">{feature.title}</Heading>
                    <Text color="fg.muted">{feature.description}</Text>
                  </Stack>
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
  <Box as="section" py={{ base: "16", md: "24" }} bg="blue.500" color="white">
    <Container maxW="7xl">
      <Stack gap="8" textAlign="center">
        <Stack gap="4">
          <Heading size={{ base: "2xl", md: "3xl" }} color="white">
            Ready to get started?
          </Heading>
          <Text fontSize="lg" color="blue.100" maxW="2xl" mx="auto">
            Join thousands of developers who are already building amazing
            applications with Chakra UI
          </Text>
        </Stack>

        <HStack gap="4" justify="center" flexWrap="wrap">
          <Button colorPalette="white" variant="solid" size="lg" px="8">
            Start Your Project
          </Button>
          <Button colorPalette="white" variant="outline" size="lg" px="8">
            View Examples
          </Button>
        </HStack>

        <Text fontSize="sm" color="blue.200" mt="4">
          No credit card required • Free forever plan available
        </Text>
      </Stack>
    </Container>
  </Box>
)

// Stats Section
const StatsSection = () => (
  <Box as="section" py={{ base: "16", md: "20" }} bg="bg.surface">
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 2, md: 4 }} gap="8" textAlign="center">
        {stats.map((stat, index) => (
          <Stack key={index} gap="2">
            <Heading size="2xl" color="blue.500">
              {stat.value}
            </Heading>
            <Text color="fg.muted" fontWeight="medium">
              {stat.label}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)

// Footer Component
const Footer = () => (
  <Box as="footer" bg="bg.surface" borderTop="1px" borderColor="border">
    <Container maxW="7xl">
      <Stack gap="8" py="12">
        <SimpleGrid columns={{ base: 1, md: 4 }} gap="8">
          <Stack gap="4">
            <HStack>
              <Image
                alt="chakra logo"
                src="/static/logo.svg"
                width="24"
                height="24"
              />
              <Text fontWeight="bold" fontSize="lg">
                Chakra UI
              </Text>
            </HStack>
            <Text color="fg.muted" maxW="sm">
              Build accessible React apps with speed. Chakra UI provides the
              building blocks.
            </Text>
            <Button colorPalette="blue" size="sm" w="fit-content">
              Join Community
            </Button>
          </Stack>

          <Stack gap="4">
            <Text fontWeight="semibold">Product</Text>
            <Stack gap="2">
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Components
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Templates
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Figma Kit
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Changelog
              </Link>
            </Stack>
          </Stack>

          <Stack gap="4">
            <Text fontWeight="semibold">Resources</Text>
            <Stack gap="2">
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Documentation
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Guides
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Blog
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Examples
              </Link>
            </Stack>
          </Stack>

          <Stack gap="4">
            <Text fontWeight="semibold">Company</Text>
            <Stack gap="2">
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                About
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Team
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Careers
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Contact
              </Link>
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
              © 2024 Chakra UI. All rights reserved.
            </Text>
            <HStack gap="4">
              <Link color="fg.muted" fontSize="sm" _hover={{ color: "fg" }}>
                Privacy Policy
              </Link>
              <Link color="fg.muted" fontSize="sm" _hover={{ color: "fg" }}>
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
const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Optimized for performance with minimal bundle size and runtime overhead.",
  },
  {
    icon: "🎨",
    title: "Fully Customizable",
    description:
      "Theme your components with design tokens and CSS-in-JS styling.",
  },
  {
    icon: "♿",
    title: "Accessible by Default",
    description:
      "Built with accessibility in mind, following WAI-ARIA guidelines.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Mobile-first responsive design system with breakpoint utilities.",
  },
  {
    icon: "���",
    title: "Composable",
    description:
      "Compose complex UIs from simple, reusable component building blocks.",
  },
  {
    icon: "🌙",
    title: "Dark Mode",
    description:
      "First-class support for dark mode with seamless theme switching.",
  },
]

const stats = [
  { value: "100K+", label: "GitHub Stars" },
  { value: "2M+", label: "Monthly Downloads" },
  { value: "50K+", label: "Discord Members" },
  { value: "500+", label: "Contributors" },
]

// Main Page Component
export default async function Page() {
  return (
    <Box minH="100vh" bg="bg.canvas">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </Box>
  )
}
