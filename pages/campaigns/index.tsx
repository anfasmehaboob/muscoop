import React from 'react'
import CampaignStatus from '../../components/Campaigns/CampaignStatus'
import Wrapper from '../../components/Wrapper/Wrapper'
import styles from '../../styles/Campaigns.module.scss'
import { Tabs,TabList ,Tab,TabPanel} from 'react-tabs'
import CampaignsSent from '../../components/dashboard/CampaignsSent/CampaignsSent'
import CampaignResults from '../../components/Campaigns/CampaignResults'

function Campaigns() {
  return (
    <Wrapper>
        <div className={styles.campaigns} id="tab">
            <div className={styles.container}>
            <Tabs>
            <div className={styles.tabHead}>
              <TabList>
                <Tab>Campaigns Performance</Tab>
                <Tab>Templates</Tab>
              </TabList>

            </div>

            <TabPanel>
              <div className={styles.tabItem}>
              <div className={styles.gridOne}>
                    <div className={styles.campaignStatus}>
                        <CampaignStatus />
                    </div>
                    <div className={styles.campaignsSent}>
                        <CampaignsSent />
                    </div>
                    <div className={styles.campaignResults}>
                    <CampaignResults />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.tabItem}>
              
              </div>
            </TabPanel>
          </Tabs>
               
            </div>
        </div>
    </Wrapper>
  )
}

export default Campaigns