import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import List from '@vkontakte/vkui/dist/components/List/List';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Промокоды для такси</PanelHeader>
        <Tabs theme="header" type="buttons">
            <HorizontalScroll>
                <TabsItem>
                    Все
                </TabsItem>
                <TabsItem>
                   Яндекс
                </TabsItem>
                <TabsItem>
                   GETT
                </TabsItem>
                <TabsItem>
                  Uber
                </TabsItem>
                <TabsItem>
                  Везёт
                </TabsItem>
                <TabsItem>
                  Ситимобил
                </TabsItem>
            </HorizontalScroll>
        </Tabs>
		{fetchedUser &&
		<Group title="Информация о пользователе">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Cell>
            <InfoRow title="Дата рождения">
              {`${fetchedUser.bdate}`}
            </InfoRow>
          </Cell>
		</Group>}
		<Group title="Яндекс.Такси">
			<Div>
            	<InfoRow title="Промокод от 14.01.2020">
              		Промокод для приложения Яндекс.Такси на 500 рублей: YAD500.
            	</InfoRow>
          	</Div>
          	<Div>
            	<InfoRow title="Промокод от 10.12.2019">
              		Промокод для приложения Яндекс.Такси на 200 рублей: YAD200.
            	</InfoRow>
          	</Div>
		</Group>
		<Group title="Uber">
			<Div>
            	<InfoRow title="Промокод от 14.01.2020">
              		Промокод для приложения Uber на 500 рублей: UBER500.
            	</InfoRow>
          	</Div>
          	<Div>
            	<InfoRow title="Промокод от 10.12.2019">
              		Промокод для приложения Uber на 200 рублей: UBER200.
            	</InfoRow>
          	</Div>
		</Group>
		<Group title="тест">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="test">
					Test
				</Button>
			</Div>
		</Group>
		<Group title="Информация о приложении" description="">
        <List>
          <Cell>
            <InfoRow  title="Последнее обновление">
              14 января 2020
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Версия приложения">
              0.1 beta
            </InfoRow>
          </Cell>
        </List>
      </Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
