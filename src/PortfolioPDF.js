// src/PortfolioPDF.js
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font
} from '@react-pdf/renderer';

// Optional: Custom font (you can skip this)
Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v27/mem8YaGs126MiZpBA-UFVZ0e.ttf',
});

// Styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Open Sans',
    padding: 30,
    fontSize: 11,
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1f4ed8',
  },
  subheading: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 6,
  },
  text: {
    fontSize: 11,
  },
  link: {
    color: '#1d4ed8',
    textDecoration: 'underline',
  }
});

const PortfolioPDF = ({ projects }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Suad Nesimi – Software Engineer Portfolio</Text>
        <Text style={styles.text}>Email: suadnesimi12@gmail.com | Phone: +389 75 312 230</Text>
        <Text style={styles.text}>GitHub: https://github.com/suadnesimi1</Text>
        <Text style={styles.text}>LinkedIn: https://linkedin.com/in/suad-nesimi</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        {projects.map((project, index) => (
          <View key={index} wrap={false} style={{ marginBottom: 12 }}>
            <Text style={styles.subheading}>{project.title}</Text>
            <Text style={styles.text}>{project.description}</Text>
            <Text style={styles.link}>{project.github}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PortfolioPDF;
