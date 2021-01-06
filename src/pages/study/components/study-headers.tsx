import React from "react";

const PurposeHeader = () => (
  <h5>
    <i className='fas fa-chalkboard-teacher' />
    Purpose of Study
  </h5>
);

const LabHeader = () => (
  <h5>
    <i className='fas fa-flask' />
    Lab
  </h5>
);

const LocationHeader = () => (
  <h5>
    <i className='far fa-compass' />
    Location
  </h5>
);

const WhoIsConductingHeader = () => (
  <h5>
    <i className='fas fa-search' />
    Who is Conducting the Study?
  </h5>
);

const BenefitHeader = () => (
  <h5>
    <i className='fas fa-smile' />
    Benefits to Participant
  </h5>
);

const CompensationHeader = () => (
  <h5>
    <i className='fas fa-dollar-sign' />
    Compensation Info
  </h5>
);

const InclusionHeader = () => (
  <h5>
    <i className='fas fa-check' />
    Inclusion:
  </h5>
);

const ExclusionHeader = () => (
  <h5>
    <i className='fas fa-times' />
    Exclusion:
  </h5>
);

export {
  PurposeHeader,
  LabHeader,
  LocationHeader,
  WhoIsConductingHeader,
  BenefitHeader,
  CompensationHeader,
  InclusionHeader,
  ExclusionHeader,
};
