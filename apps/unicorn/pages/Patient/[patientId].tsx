import { NextLayoutComponentType } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PFiles, ServicesData } from "../../data";
import { PatientMenu } from "../../components/PatientMenu";
import Layout from '../../layouts/Layout';
import { PatientService } from '../../components/PatientService'
import { Grid } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'

interface PatientProps { }
const Patient: NextLayoutComponentType<PatientProps> = ({ }) => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    const router = useRouter()
    const id = router.query.patientId as unknown as number
    const patientFile: PFiles[] = PFiles.filter((v) => v.id == id)
    if (patientFile && patientFile.length > 0) {
        const { id, name, status } = patientFile[0]

        if (!isLargerThan600)
            return (
                <Container>
                    <PatientMenu id={id} name={name} status={status} />
                    <Grid templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'} m={'0px 20px'} >
                        {
                            ServicesData.map(serviceData => {
                                if (serviceData.patientId == id)
                                    return (
                                        <PatientService key={serviceData.id} serviceData={serviceData} patientId={id} />
                                    )
                            }
                            )
                        }
                        <PatientService />
                    </Grid>
                </Container>
            )
        else
            return (
                <Container>
                    <PatientMenu id={id} name={name} status={status} />
                    <Grid templateColumns={'repeat(auto-fill, minmax(400px, 1fr))'} gap={4} m={'20px'}>
                        {
                            ServicesData.map(serviceData => {
                                if (serviceData.patientId == id)
                                    return (
                                        <PatientService key={serviceData.id} serviceData={serviceData} patientId={id} />
                                    )
                            }
                            )
                        }
                        <PatientService />
                    </Grid>
                </Container>
            )
    } else {
        return (
            <Container>
                Patient File Not Found!
            </Container>
        )
    }
}

const Container = styled.div({
    fontFamily: "Segoe UI",
    marginTop: '10px'
})

Patient.getLayout = (page) => (
    <Layout layoutType="NoBgColor">{page}</Layout>
)


export default Patient