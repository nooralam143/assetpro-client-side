import React from 'react';
import { Document, Font, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';


Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald',
      marginBottom: 20,
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 'auto',
      width: 200,
      height: 200,
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
    },
  });

const MyPdfDocument = ({ asset }) => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{asset.assetName}</Text>
      </View>
      <View style={styles.section}>
        <Text>{asset.assetType}</Text>
      </View>
    </Page>
  </Document>
);

export default MyPdfDocument;
