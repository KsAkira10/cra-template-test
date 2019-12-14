// @flow
import React, { useEffect } from 'react';
import { shape, string } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import './Domain.scss';
import Layout from '../../containers/Layout/Layout';
import { domainAction } from '../../store/ducks/example';

const Domain = ({
  domainState: {
    name,
  },
}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(domainAction());
  }, [dispatch]);

  return (
    <main className="domain">
      <Layout>
        <>
          <h2>Layout por dominio: {name}</h2>
        </>
      </Layout>
    </main>
  );
};
Domain.propTypes = {
  domainState: shape({
    name: string,
  }),
};

export default connect(({ domainState }) => ({ domainState }), { domainAction })(Domain);
