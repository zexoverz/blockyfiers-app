import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import { Button, CardActions, CardContent, CardMedia, Divider } from '@mui/material';
import { RouterLink } from 'src/routes/components';
import { PATH_AFTER_LOGIN } from 'src/config-global';
// ----------------------------------------------------------------------

const CARDS = [
  {
    title: "Personal Data",
    description: "Sample Personal Data Sets",
    category: "Business"
  },
  {
    title: "IoT Data",
    description: "Sample IoT Data Sets",
    category: "Technology"
  },
  {
    title: "Financial Data",
    description: "Sample Financial Data Sets",
    category: "Financial"
  },
  {
    title: "Healthcare Data",
    description: "Sample Healthcare Data Sets",
    category: "Business"
  },
  {
    title: "Geographical and Environmental Data",
    description: "Sample Geographical and Environmental Data Sets",
    category: "Environmental"
  },
  {
    title: "Agricultural Data",
    description: "Sample Agricultural Data Sets",
    category: "Environmental"
  },
  {
    title: "Retail and E-commerce Data",
    description: "Sample Retail and E-commerce Data Sets",
    category: "eCommerce"
  },
  {
    title: "Telecommunications Data",
    description: "Sample Telecommunications Data Sets",
    category: "Technology"
  },
  {
    title: "Energy Data",
    description: "Sample Energy Data Sets",
    category: "Environmental"
  },
  {
    title: "Open Government Data",
    description: "Sample Open Government Data Sets",
    category: "Government"
  },
  {
    title: "Media and Entertainment Data",
    description: "Sample Media and Entertainment Data Sets",
    category: "Social Media"
  },
  {
    title: "Real Estate Data",
    description: "Sample Real Estate Data Sets",
    category: "Real Estate"
  }
];

// ----------------------------------------------------------------------

export default function PopularDataset() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
            Popular Datasets
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography component="div" variant="h5" sx={{ color: 'text.disabled' }}>
            Dataset samples available for selected datasets.<br />
            Price starts from $0.001 per record.
          </Typography>
        </m.div>

        
      </Stack>

      <Box
        gap={{ xs: 2, lg: 6 }}
        display="grid"
        alignItems="center"
        justifyContent={"center"}
        alignContent={"center"}
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card sx={{ maxWidth:300 ,alignContent: "center", alignItems: "center", justifyContent: "center", justifyItems: "center"}} >
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" align='center'>
                        {card.title}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary" align='center'>
                        {card.description}
                        </Typography> */}
                        <Divider/>
                    </CardContent>
                    <Box textAlign={"center"} sx={{marginBottom: 2}}>
                        <Button size="medium" color='primary' component={RouterLink} href={PATH_AFTER_LOGIN} >Request Dataset</Button>
                    </Box>
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
