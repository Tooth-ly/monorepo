import { Grid } from "@chakra-ui/react";
import { NextLayoutComponentType } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { PFiles } from "../data";
import { PFilesCard } from "../components/PFilesCard";
import Layout from "../layouts/Layout";

interface pfilesProps { }

const pfiles: NextLayoutComponentType<pfilesProps> = ({ }) => {
    const router = useRouter()
    return (
        <Container>
            <Title>Patient Files</Title>
            <Grid
                paddingLeft={25}
                paddingRight={25}
                templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
                columnGap={10}
                rowGap={7}
            >
                {PFiles.map(pfile => (
                    <div key={pfile.id} onClick={() => router.push(`/Patient/${pfile.id}`)}>
                        <PFilesCard data={pfile} key={pfile.id} />
                    </div>
                ))}
            </Grid>
        </Container >
    );
};

pfiles.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

const Title = styled.p({
    fontSize: '30px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '25px'
})

const Container = styled.div`
  font-family: "Segoe UI";
  /* height: 55vh; */
  /* height: 100%;
  width: 100%;  */
`;
export default pfiles;
