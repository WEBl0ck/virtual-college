import React, { useState } from 'react';

import '../scss/SectionContainer.scss';

import { Route, Link, useHistory } from 'react-router-dom';

import NewsIcon from '../assets/images/warning-sign.svg';

const SectionContainer = ({ sectionName, visibleSidebar, sectionSource }) => {
  let history = useHistory();
  const [activeItem, setActiveItem] = useState(null);
  const [itemId, setItemId] = useState(history.location.pathname);

  const onClickItem = (item) => {
    setActiveItem(item);
    setItemId(item.name.split('documents/')[1]);
  };

  console.log(itemId);
  console.log(activeItem);

  return (
    <div className="section-container">
      <div className="section-name">{sectionName}</div>
      <div className="section-layout">
        <div className="section-sidebar">
          <ul>
            {visibleSidebar &&
              sectionSource.map((item) => (
                <Link
                  to={`/${item.name.split('documents/')[1]}`}
                  className="section-sidebar-item"
                  key={item.name}
                  onClick={onClickItem ? () => onClickItem(item) : null}>
                  {item.fields.title ? item.fields.title.stringValue : null}
                </Link>
              ))}
          </ul>
        </div>

        <div className="section-content">
          <Route path={history.location.pathname}>
            {activeItem ? (
              <div className="section-content-item">
                <div
                  className="section-content-picture"
                  style={{
                    backgroundImage: activeItem.fields.pictures
                      ? `url(${activeItem.fields.pictures.mapValue.fields.src.stringValue})`
                      : `url(${NewsIcon})`,
                  }}></div>

                <div className="section-content-name">
                  {activeItem.fields.title ? activeItem.fields.title.stringValue : null}
                </div>
                <div className="section-content-date">{activeItem.fields.createdate.timestampValue.split('T')[0]}</div>

                <div
                  className="section-content-text"
                  dangerouslySetInnerHTML={{
                    __html: activeItem.fields.body ? activeItem.fields.body.stringValue : null,
                  }}></div>
              </div>
            ) : (
              <div className="section-content-info">Виберiть {sectionName}</div>
            )}
          </Route>
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
