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
            <NextImage
              alt="company logo"
              src="/static/logo.svg"
              width="32"
              height="32"
            />
          </Box>
          <HStack gap="6" hideBelow="md">
            <Link fontWeight="medium" color="fg.muted" _hover={{ color: "fg" }}>
              Services
            </Link>
            <Link fontWeight="medium" color="fg.muted" _hover={{ color: "fg" }}>
              About
            </Link>
            <Link fontWeight="medium" color="fg.muted" _hover={{ color: "fg" }}>
              Portfolio
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
          <Button colorPalette="red" size="lg" fontWeight="bold" px="8">
            📞 Call Now
          </Button>
        </HStack>
      </Flex>
    </Container>
  </Box>
)

// Hero Section with Hero Image
const HeroSection = () => (
  <Box
    as="section"
    py={{ base: "16", md: "24" }}
    bg="bg.surface"
    overflow="hidden"
  >
    <Container maxW="7xl">
      <Grid
        columns={{ base: 1, lg: 2 }}
        gap="12"
        align="center"
        minH={{ base: "auto", lg: "80vh" }}
      >
        {/* Hero Content */}
        <Stack gap="8" justify="center">
          <Stack gap="6">
            <Heading
              size={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              lineHeight="1.1"
            >
              Transform Your Business with
              <Span color="blue.500" display="block">
                Professional Solutions
              </Span>
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="xl"
            >
              We deliver exceptional results that drive growth, increase
              efficiency, and help your business reach new heights. Get started
              today with a free consultation.
            </Text>
          </Stack>

          <HStack gap="4" flexWrap="wrap">
            <Button colorPalette="red" size="xl" px="10" fontWeight="bold">
              📞 Call Now - (555) 123-4567
            </Button>
            <Button variant="outline" size="xl" px="8">
              Learn More
            </Button>
          </HStack>

          <HStack gap="8" pt="4">
            <VStack gap="1" align="start">
              <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                500+
              </Text>
              <Text fontSize="sm" color="fg.muted">
                Happy Clients
              </Text>
            </VStack>
            <VStack gap="1" align="start">
              <Text fontSize="2xl" fontWeight="bold" color="green.500">
                98%
              </Text>
              <Text fontSize="sm" color="fg.muted">
                Success Rate
              </Text>
            </VStack>
            <VStack gap="1" align="start">
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">
                24/7
              </Text>
              <Text fontSize="sm" color="fg.muted">
                Support
              </Text>
            </VStack>
          </HStack>
        </Stack>

        {/* Hero Image */}
        <Box position="relative" h={{ base: "400px", lg: "600px" }}>
          <Box
            position="absolute"
            inset="0"
            bg="gradient-to-br"
            bgGradient="linear(to-br, blue.400, purple.600)"
            rounded="2xl"
            shadow="2xl"
            transform="rotate(3deg)"
            zIndex="1"
          />
          <Box
            position="relative"
            h="full"
            bg="white"
            _dark={{ bg: "gray.800" }}
            rounded="2xl"
            shadow="xl"
            overflow="hidden"
            zIndex="2"
            p="8"
            display="flex"
            align="center"
            justify="center"
            flexDirection="column"
            gap="6"
          >
            <Box
              w="20"
              h="20"
              bg="blue.500"
              rounded="full"
              display="flex"
              align="center"
              justify="center"
              fontSize="3xl"
            >
              🚀
            </Box>
            <VStack gap="4" textAlign="center">
              <Heading size="lg">Ready to Get Started?</Heading>
              <Text color="fg.muted">
                Join hundreds of satisfied customers who have transformed their
                business with our solutions.
              </Text>
              <Button colorPalette="blue" size="lg">
                Get Free Quote
              </Button>
            </VStack>
          </Box>
        </Box>
      </Grid>
    </Container>
  </Box>
)

// Testimonials Section
const TestimonialsSection = () => (
  <Box as="section" py={{ base: "16", md: "24" }} bg="bg.canvas">
    <Container maxW="7xl">
      <Stack gap="16">
        <Stack gap="4" textAlign="center" maxW="3xl" mx="auto">
          <Heading size={{ base: "2xl", md: "3xl" }}>
            What Our Clients Say
          </Heading>
          <Text fontSize="lg" color="fg.muted">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about working with us.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="8">
          {testimonials.map((testimonial, index) => (
            <Card.Root key={index} variant="elevated" h="full">
              <Card.Body p="8">
                <Stack gap="6">
                  {/* Star Rating */}
                  <HStack gap="1">
                    {[...Array(5)].map((_, i) => (
                      <Text key={i} color="yellow.500" fontSize="lg">
                        ★
                      </Text>
                    ))}
                  </HStack>

                  {/* Testimonial Text */}
                  <Text fontSize="md" lineHeight="1.6" color="fg.muted">
                    "{testimonial.text}"
                  </Text>

                  {/* Client Info */}
                  <HStack gap="4">
                    <Box
                      w="12"
                      h="12"
                      bg="gradient-to-br"
                      bgGradient={`linear(to-br, ${testimonial.color}.400, ${testimonial.color}.600)`}
                      rounded="full"
                      display="flex"
                      align="center"
                      justify="center"
                      color="white"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      {testimonial.name.charAt(0)}
                    </Box>
                    <VStack gap="0" align="start">
                      <Text fontWeight="semibold">{testimonial.name}</Text>
                      <Text fontSize="sm" color="fg.muted">
                        {testimonial.role} at {testimonial.company}
                      </Text>
                    </VStack>
                  </HStack>
                </Stack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>

        {/* Call to Action in Testimonials */}
        <Box textAlign="center" pt="8">
          <VStack gap="4">
            <Text fontSize="lg" fontWeight="medium">
              Ready to join our satisfied customers?
            </Text>
            <Button colorPalette="red" size="xl" px="10" fontWeight="bold">
              📞 Call Now - (555) 123-4567
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Container>
  </Box>
)

// Footer Component
const Footer = () => (
  <Box as="footer" bg="bg.surface" borderTop="1px" borderColor="border">
    <Container maxW="7xl">
      <Stack gap="12" py="16">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="8">
          {/* Company Info */}
          <Stack gap="6">
            <HStack>
              <NextImage
                alt="company logo"
                src="/static/logo.svg"
                width="32"
                height="32"
              />
              <Text fontWeight="bold" fontSize="xl">
                YourCompany
              </Text>
            </HStack>
            <Text color="fg.muted" maxW="sm">
              We're dedicated to providing exceptional solutions that help
              businesses grow and succeed in today's competitive market.
            </Text>
            <Button
              colorPalette="red"
              size="lg"
              w="fit-content"
              fontWeight="bold"
            >
              📞 Call Now
            </Button>
          </Stack>

          {/* Services */}
          <Stack gap="4">
            <Text fontWeight="semibold" fontSize="lg">
              Services
            </Text>
            <Stack gap="2">
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Business Consulting
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Digital Marketing
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Web Development
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Strategy Planning
              </Link>
            </Stack>
          </Stack>

          {/* Company */}
          <Stack gap="4">
            <Text fontWeight="semibold" fontSize="lg">
              Company
            </Text>
            <Stack gap="2">
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                About Us
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Our Team
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Careers
              </Link>
              <Link color="fg.muted" _hover={{ color: "fg" }}>
                Contact
              </Link>
            </Stack>
          </Stack>

          {/* Contact Info */}
          <Stack gap="4">
            <Text fontWeight="semibold" fontSize="lg">
              Contact
            </Text>
            <Stack gap="3">
              <VStack gap="1" align="start">
                <Text fontWeight="medium">📞 Phone</Text>
                <Link
                  color="red.500"
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{ color: "red.600" }}
                >
                  (555) 123-4567
                </Link>
              </VStack>
              <VStack gap="1" align="start">
                <Text fontWeight="medium">📧 Email</Text>
                <Link color="fg.muted" _hover={{ color: "fg" }}>
                  hello@yourcompany.com
                </Link>
              </VStack>
              <VStack gap="1" align="start">
                <Text fontWeight="medium">📍 Address</Text>
                <Text color="fg.muted" fontSize="sm">
                  123 Business St
                  <br />
                  Suite 100
                  <br />
                  City, ST 12345
                </Text>
              </VStack>
            </Stack>
          </Stack>
        </SimpleGrid>

        {/* Bottom Footer */}
        <Box pt="8" borderTop="1px" borderColor="border">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap="4"
          >
            <Text color="fg.muted" fontSize="sm">
              © 2024 YourCompany. All rights reserved.
            </Text>
            <HStack gap="6">
              <Link color="fg.muted" fontSize="sm" _hover={{ color: "fg" }}>
                Privacy Policy
              </Link>
              <Link color="fg.muted" fontSize="sm" _hover={{ color: "fg" }}>
                Terms of Service
              </Link>
              <Link color="fg.muted" fontSize="sm" _hover={{ color: "fg" }}>
                Cookie Policy
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Stack>
    </Container>
  </Box>
)

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    text: "Working with this team completely transformed our business. Their expertise and dedication helped us increase our revenue by 300% in just 6 months.",
    color: "blue",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthCorp",
    text: "The results speak for themselves. Our customer acquisition cost dropped by 50% while our conversion rates doubled. Highly recommend their services!",
    color: "green",
  },
  {
    name: "Emily Davis",
    role: "Founder",
    company: "InnovateLab",
    text: "Professional, responsive, and incredibly knowledgeable. They understood our vision and delivered beyond our expectations. A true partner in our success.",
    color: "purple",
  },
  {
    name: "Robert Wilson",
    role: "Operations Manager",
    company: "Efficiency Pro",
    text: "The strategic insights and implementation support we received were game-changing. Our operational efficiency improved dramatically within weeks.",
    color: "orange",
  },
  {
    name: "Lisa Thompson",
    role: "VP of Sales",
    company: "SalesForce Plus",
    text: "Our sales team's performance skyrocketed after implementing their recommendations. The ROI on this investment was immediate and substantial.",
    color: "red",
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "DevSolutions",
    text: "Technical excellence combined with business acumen - rare to find both in one team. They helped us scale our platform to handle 10x the traffic.",
    color: "teal",
  },
]

// Main Page Component
export default async function Page() {
  return (
    <Box minH="100vh" bg="bg.canvas">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <Footer />
    </Box>
  )
}
