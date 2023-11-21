// @mui
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import { Button, Grid, ListItemIcon, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, ToggleButton, ToggleButtonGroup } from '@mui/material';
import PlanFreeIcon from 'src/assets/icons/plan-free-icon';
import { useEffect, useState } from 'react';
import Iconify from 'src/components/iconify';
import financialData from "./financialData.json"
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

// ----------------------------------------------------------------------
const financialSubsets = [
  'Segment Government',
  'Product Montana',
  'Data Year 2014'
]

const tableLabels = [
  {
    id: "segment",
    label: "segment"
  },
  {
    id: "product",
    label: "product"
  },
  {
    id: "unitPrice",
    label: "unitPrice"
  },
  {
    id: "manufacturingPrice",
    label: "manufacturingPrice"
  },
  {
    id: "gross",
    label: "gross"
  },
  {
    id: "sales",
    label: "sales"
  },
  {
    id: "cogs",
    label: "cogs"
  },
  {
    id: "profit",
    label: "profit"
  },
  
  {
    id: "date",
    label: "date"
  },
  {
    id: "month",
    label: "month"
  },
  {
    id: "year",
    label: "year"
  },
]

console.log(financialData, "TEST")
export default function FourView() {
  const settings = useSettingsContext();
  const [subset, setSubset] = useState('Segment Government')
  const [format, setFormat] = useState('CSV')
  const [dataTable, setDataTable] = useState([])

  const handleChange = (event, newSubset) => {
    let filtered = []

    if(newSubset == 'Segment Government'){
      filtered = financialData.filter((item) => item.segment == "Government")

      filtered = filtered.slice(0, 10)

      
    }else if(newSubset == 'Product Montana'){
      filtered = financialData.filter((item) => item.product == " Montana ")

      filtered = filtered.slice(0, 10)
    }else if(newSubset == 'Data Year 2014'){
      filtered = financialData.filter((item) => item.year == 2014)

      filtered = filtered.slice(0, 10)
    }

    setDataTable(filtered)
    setSubset(newSubset);
  };

  const handleChangeFormat = (event, newFormat) => {
    setFormat(newFormat);
  };

  useEffect(() => {
    let filtered = financialData.filter((item) => item.segment == "Government")

    filtered = filtered.slice(0, 10)
    setDataTable(filtered)
  }, [])
  

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Financial Data </Typography>
      

      <Box
        sx={{
          mt: 5,
          maxWidth: 800,
          borderRadius: 2,
          // bgcolor: "green"
        }}       
        
        gap={3}
        display={'flex'}
        flexDirection={'column'}
      > 
        <Typography variant="body1">
        Financial datasets encompass a vast array of information crucial for understanding and analyzing economic trends, market behavior, and investment opportunities. These datasets comprise diverse financial metrics, including stock prices, company financial statements, market indices, interest rates, economic indicators, and much more. 
        </Typography>

        <Typography variant="body1">
        They serve as the backbone for financial analysis, enabling researchers, analysts, investors, and institutions to make informed decisions. These datasets are often structured, real-time, and historical, offering a comprehensive view of the financial landscape.
        </Typography>
      </Box>

      <Grid container spacing={2} mt={5}>
        <Grid item xs={3} alignItems={"center"} justifyContent={"center"}>
          <Box display={'flex'} flexDirection={'row'} gap={1} textAlign={"center"} justifyContent={"center"} mr={15}>
            <Typography width={50} height={40}>
              <PlanFreeIcon />
            </Typography>
            <Typography variant="h4">
              Subsets
            </Typography>
          </Box>

          <Box display={'flex'} textAlign={"center"} alignItems={"center"} justifyContent={"center"} mt={2}>
            
            <ToggleButtonGroup
              color="primary"
              value={subset}
              exclusive
              onChange={handleChange}
              orientation='vertical'
              sx={{width: "80%", alignItems: "left", border: 0}}
              
            >
              {
                financialSubsets.map((item, i) => (
                  <ToggleButton value={item} key={i} sx={{justifyContent: "left", textAlign: "center"}}
                  >
                    <Button
                        size="small"
                        color="inherit"
                        startIcon ={<Iconify icon="clarity:block-solid" width={18} sx={{ ml: -0.5 }} />}
                    >
                      {item}
                    </Button>
                  </ToggleButton>
                ))
              }
            </ToggleButtonGroup>
          </Box>

          <Box display={'flex'} textAlign={"center"} alignItems={"center"} justifyContent={"center"} mt={3} width={"100%"}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Iconify icon="quill:add" width={20} sx={{ ml: -0.5 }} />}
              sx={{alignItems: "center", width: "100%"}}
              
            >
                Custom Subset
            </Button>
          </Box>

          
        </Grid>
        <Grid item xs={8}>
          <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} height={40}>
            <Box display={"flex"} flexDirection={"row"} gap={3} >
              <ToggleButtonGroup
                color="primary"
                value={format}
                exclusive
                onChange={handleChangeFormat}
              >
                <ToggleButton value="CSV">CSV</ToggleButton>
                <ToggleButton value="JSON">JSON</ToggleButton>
              </ToggleButtonGroup>

              <Button
                variant="outlined"
                color="secondary"
                startIcon ={<Iconify icon="ic:round-download" width={20} sx={{ ml: -0.5 }} />}
              >
                Download Sample
              </Button>
            </Box>

            <Box display={"flex"} flexDirection={"row"} gap={2} >
              <Button
                variant="outlined"
                color="secondary"
                startIcon ={<Iconify icon="bx:customize" width={20} sx={{ ml: -0.5 }} />}
              >
                Customize
              </Button>

              <Button
                variant="contained"
                color="secondary"
              >
                Purchase Option
              </Button>
            </Box>
          </Box>

          <Box mt={3}>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Scrollbar>
                <Table sx={{ minWidth: 680 }}>
                  <TableHeadCustom headLabel={tableLabels} />

                  <TableBody>
                    {dataTable.map((row) => (
                      <DataRow key={row.id} row={row} />
                    ))}
                  </TableBody>
                </Table>
              </Scrollbar>
            </TableContainer>
          </Box>


        </Grid>
      </Grid>
    </Container>
  );
}


function DataRow({ row }) {

  console.log(row, "CHECK")
  return (
    <>
      <TableRow sx={{textAlign: "left"}}>
        <TableCell>{row.segment}</TableCell>
        <TableCell>{row.product}</TableCell>
        <TableCell>{row.unitPrice}</TableCell>
        <TableCell>{row.manufacturingPrice}</TableCell>
        <TableCell>{row.gross}</TableCell>
        <TableCell>{row.sales}</TableCell>
        <TableCell>{row.cogs}</TableCell>
        <TableCell>{row.profit}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.month}</TableCell>
        <TableCell>{row.year}</TableCell>
      </TableRow>
    </>
  );
}

DataRow.propTypes = {
  row: PropTypes.object,
};