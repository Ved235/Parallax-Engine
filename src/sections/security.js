/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import privacy from 'assets/images/privacy.png';

const Security = () => {
  return (
    <section sx={styles.section} id="features">
      <Container>
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Privacy! That’s Parallax Engine"
            description="Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime.We value the privacy and cofidentialy of our clients. No data is collected for any pruposes."
            learnMore="Privacy Policy"
            moreLink="privacy-policy"
          />
        </Box>
      </Container>
    </section>
  );
};

export default Security;

const styles = {
  section: {
    pt: [6, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    alignItems: 'center',
    gap: [null, null, null, 6, 14],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '1fr 470px'],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: 'center',
    mt: [8, null, 0],
  },
};
