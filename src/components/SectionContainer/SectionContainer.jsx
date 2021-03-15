import React from 'react';

import './SectionContainer.scss';

import { SectionImage } from '../index';

import { Route, NavLink } from 'react-router-dom';

const SectionContainer = ({ sectionName, visibleSidebar, sectionSource, sectionPath }) => {
  return (
    <div className="section-container">
      <div className="section-name">{sectionName}</div>
      <div className="section-layout">
        <div className="section-sidebar">
          {visibleSidebar &&
            sectionSource.map((item) => (
              <NavLink
                activeClassName="section-is-active"
                to={`/${item.name.split('documents/')[1]}`}
                className="section-sidebar-item"
                key={item.name}>
                {item.fields.title ? item.fields.title.stringValue : null}
              </NavLink>
            ))}
        </div>
        <div className="section-content">
          {sectionSource &&
            sectionSource.map((item) => (
              <Route path={`/${item.name.split('documents/')[1]}`} key={item.name}>
                <div className="section-content-item">
                  <SectionImage
                    src={item.fields.pictures ? item.fields.pictures.mapValue.fields.src.stringValue : null}
                    className={'section-content-picture'}
                  />
                  <div className="section-content-name">{item.fields.title ? item.fields.title.stringValue : null}</div>
                  <div className="section-content-date">{item.fields.createdate.timestampValue.split('T')[0]}</div>
                  <div
                    className="section-content-text"
                    dangerouslySetInnerHTML={{
                      __html: item.fields.body ? item.fields.body.stringValue : null,
                    }}></div>
                </div>
              </Route>
            ))}
          <Route path={sectionPath} exact>
            <div className="section-content-info">Виберiть зi списку</div>
          </Route>
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
