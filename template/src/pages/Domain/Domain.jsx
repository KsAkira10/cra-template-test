// @flow
import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import './Domain.scss';
import Layout from '../../containers/Layout/Layout';

const Domain = ({ domainState }) => (
  <main className="domain">
    <Layout>
      <h2>Layout por dominio: {domainState}</h2>
    </Layout>
  </main>
);

Domain.propTypes = {
  domainState: shape({})
};

export default connect(({ domainState }) => ({ domainState }), {})(Domain);
